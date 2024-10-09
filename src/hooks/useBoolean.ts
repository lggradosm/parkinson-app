import { useState } from "react";

export type useBooleanType = {
    status: boolean;
    toggle: () => void;
    activate: () => void;
    desactivate: () => void;
}

export default function useBoolean (initalState = false):useBooleanType {
    const [status, setStatus] = useState<boolean>(initalState);

    const toggle = () => {
        setStatus(prev=> !prev);
    }

    const activate = () => {
        setStatus(true);
    }

    const desactivate = () => {
        setStatus(false);
    }

    return {status, toggle, activate, desactivate}
}