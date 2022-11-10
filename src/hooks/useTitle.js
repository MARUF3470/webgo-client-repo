
import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - WebGo`;
    }, [title])
};

export default useTitle;