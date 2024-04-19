function FormFeeling() {
    const handleSubmit = (e) => {
        e.preventDefault();
        
    }
    return (
        <form onSubmit={e => handleSubmit(e)}>
            <input type="text" value={feeling}  />

        </form>
    )
}
export default FormFeeling;