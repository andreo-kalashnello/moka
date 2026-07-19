"use client";

import { Bell, CalendarDays, Check, X } from "lucide-react";
import {
  createContext,
  type FormEvent,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";

type RequestModalState =
  | { kind: "booking" }
  | { kind: "service"; serviceTitle: string };

interface RequestModalContextValue {
  openBooking: () => void;
  openService: (serviceTitle: string) => void;
}

const RequestModalContext = createContext<RequestModalContextValue | null>(null);

export function useRequestModal() {
  const context = useContext(RequestModalContext);

  if (!context) {
    throw new Error("useRequestModal must be used inside RequestModalProvider");
  }

  return context;
}

interface RequestModalProviderProps {
  children: ReactNode;
}

export function RequestModalProvider({ children }: RequestModalProviderProps) {
  const [request, setRequest] = useState<RequestModalState | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const successButtonRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const titleId = useId();
  const descriptionId = useId();

  const openBooking = useCallback(() => {
    returnFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setIsSubmitted(false);
    setRequest({ kind: "booking" });
  }, []);

  const openService = useCallback((serviceTitle: string) => {
    returnFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setIsSubmitted(false);
    setRequest({ kind: "service", serviceTitle });
  }, []);

  const closeModal = useCallback(() => {
    setRequest(null);
    window.requestAnimationFrame(() => returnFocusRef.current?.focus());
  }, []);

  useEffect(() => {
    if (!request) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(() => nameInputRef.current?.focus());

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), input:not([disabled]), a[href]',
      );
      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal, request]);

  useEffect(() => {
    if (request && isSubmitted) {
      window.requestAnimationFrame(() => successButtonRef.current?.focus());
    }
  }, [isSubmitted, request]);

  const contextValue = useMemo(
    () => ({ openBooking, openService }),
    [openBooking, openService],
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const phone = new FormData(event.currentTarget).get("phone");

    if (typeof phone !== "string" || phone.replace(/\D/g, "").length < 7) {
      phoneInputRef.current?.setCustomValidity("Введіть щонайменше 7 цифр номера телефону.");
      phoneInputRef.current?.reportValidity();
      return;
    }

    setIsSubmitted(true);
  };

  const isService = request?.kind === "service";
  const title = isService ? `Замовити «${request.serviceTitle}»` : "Забронювати столик";
  const description = isService
    ? "Залиште контакти — ми уточнимо деталі та підтвердимо замовлення."
    : "Залиште ім’я та номер — ми зателефонуємо, щоб узгодити час і кількість гостей.";

  return (
    <RequestModalContext.Provider value={contextValue}>
      <div className="app-shell" inert={request ? true : undefined} aria-hidden={request ? true : undefined}>
        {children}
      </div>
      {request && (
        <div className="request-modal-backdrop" onMouseDown={closeModal}>
          <div
            ref={dialogRef}
            className="request-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="request-modal__top">
              <span className="request-modal__icon">
                {isService ? (
                  <Bell aria-hidden="true" size={24} strokeWidth={1.6} />
                ) : (
                  <CalendarDays aria-hidden="true" size={24} strokeWidth={1.6} />
                )}
              </span>
              <button type="button" className="modal-close" aria-label="Закрити вікно" onClick={closeModal}>
                <X aria-hidden="true" size={22} />
              </button>
            </div>

            {!isSubmitted ? (
              <>
                <p className="section-label">MOKA • ЗАПИТ</p>
                <h2 id={titleId}>{title}</h2>
                <p id={descriptionId} className="request-modal__description">
                  {description}
                </p>
                <form className="request-form" onSubmit={handleSubmit}>
                  <label>
                    <span>Ваше ім’я</span>
                    <input
                      ref={nameInputRef}
                      type="text"
                      name="name"
                      autoComplete="name"
                      minLength={2}
                      placeholder="Наприклад, Марія"
                      required
                    />
                  </label>
                  <label>
                    <span>Номер телефону</span>
                    <input
                      ref={phoneInputRef}
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      inputMode="tel"
                      minLength={7}
                      placeholder="+38 (___) ___ __ __"
                      required
                      onInput={(event) => event.currentTarget.setCustomValidity("")}
                    />
                  </label>
                  <button className="button request-form__submit" type="submit">
                    {isService ? "Надіслати запит" : "Забронювати"}
                  </button>
                  <p className="request-form__note">Без оплати — лише підтвердження телефоном.</p>
                </form>
              </>
            ) : (
              <div className="request-success" role="status">
                <span className="request-success__icon">
                  <Check aria-hidden="true" size={28} strokeWidth={2} />
                </span>
                <h2 id={titleId}>Дякуємо!</h2>
                <p id={descriptionId}>Запит збережено. Команда MOKA зв’яжеться з вами найближчим часом.</p>
                <button ref={successButtonRef} className="button" type="button" onClick={closeModal}>
                  Готово
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </RequestModalContext.Provider>
  );
}
