import { useEffect, useState } from "react";

export function useDebounce(value: string, delay = 300): string {
    const [debounced, setDebouds] = useState(value)

    useEffect( () => {
        const handler = setTimeout( () => setDebouds(value), delay)
        return () => clearTimeout(handler)
    }, [value, delay])

    return debounced
}