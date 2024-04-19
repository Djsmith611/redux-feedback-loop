function FormComprehension() {
    const handleSubmit = (e) => {
        e.preventDefault();

    }
    return (
        <form onSubmit={e => handleSubmit(e)}>
            <input type="text" value={comprehension} onChange={e => setComprehension(e.target.value)}  />
            <button>Next</button>
        </form>
    )
}
export default FormComprehension;