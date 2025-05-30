import { useState, createContext, useContext } from "react"; 
import "./ToastNotif.css";

const toastNotifContext = createContext();

export default function ToastNotifProvider({children}) {
    const [toasts, setToasts] = useState([]);

    function addToast(mensagem, tipo = "info") {
        const id = Math.random().toString(36).substring(2, 15);
        
        setToasts(prevToasts => [...prevToasts, { mensagem, tipo, id }]);

        setTimeout(() => {
            removeToast(id);
        }, 3000);
    }

    function removeToast(id) {
        setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id));
    }

    return (
        <toastNotifContext.Provider value={{ toasts, addToast, removeToast }}>
            <div className="toast-container">
                {toasts.map(toast => (
                    <div onClick={() => removeToast(toast.id)} key={toast.id} className={`toast toast-${toast.tipo}`}>
                        <span> {toast.mensagem} </span>
                    </div>
                ))}
            </div>
            {children}
        </toastNotifContext.Provider>
    );
}

export function useToast() {
    return useContext(toastNotifContext);
}