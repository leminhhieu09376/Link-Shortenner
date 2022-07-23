import axios from "axios";
import { useEffect, useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard"


const LinkResult = ({ inputValue }) => {
    const [sortenLink, setSorttenLink] = useState("")
    const [copied, setCopied] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const fetchData = async () => {
        try {
            setLoading(true)
            setError(false)
            const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
            setSorttenLink(res.data.result.full_short_link)
        } catch (err) {
            setError(true)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        if (inputValue.length) {
            fetchData()
        }
    }, [inputValue])
    useEffect(() => {
        const timer = setTimeout(() => {
            setCopied(false)
        }, 1000)
        return () => {
            clearTimeout(timer)
        }
    }, [copied])

    if (loading) {
        return <p className="noData">Loading...</p>
    }
    if (error === true) {
        return <p className="noData">Some thing went wrong</p>
    }

    return (
        <>
            {sortenLink && (
                <div className="result">
                    <p>{sortenLink}</p>
                    <CopyToClipboard text={sortenLink} onCopy={() => setCopied(true)}>
                        <button className={copied ? "copied" : ""}>Copy to clipboard</button>
                    </CopyToClipboard>

                </div>
            )}
        </>

    )
}

export default LinkResult