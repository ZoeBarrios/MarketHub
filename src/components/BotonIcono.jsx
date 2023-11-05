export const BotonIcono = (functionBtn) => {
    console.log(functionBtn);
    return (
        <button className={`productPage-btnIcono ${functionBtn === "volver" ? "fa-solid fa-chevron-left" : "fa-regular fa-heart"}`}></button >
    )
}