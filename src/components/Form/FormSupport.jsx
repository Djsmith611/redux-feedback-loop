function FormSupport() {
    return (
        <form onSubmit={e => handleSubmit(e)}>
            <input type="text" value={support}  />

        </form>
    )
}
export default FormSupport;