export const changeCard = (
  infoCard,
  inReview,
  reviewCard,
  refernece,
  setReference,
  setReviewCard
) => {
  if (inReview.current.classList[2] !== "good") {
    //Guardar id y key para comparar tarjetas
    reviewCard.push(infoCard);

    //Guardar la referencia de la tarjeta (DOM)
    refernece.push(inReview.current);

    //Modificar referencia (voltear carta)
    inReview.current.classList.remove("changeImage");

    //Comparar cuando se tiene 2 cartas
    if (reviewCard.length === 2) {
      const [cardOne, cardTwo] = reviewCard;
      if ((cardOne[0] === cardTwo[0]) & (cardOne[1] !== cardTwo[1])) {
        refernece.forEach((ref) => {
          ref.classList.add("good");
        });
        setReference([]);
        setReviewCard([]);
      } else {
        setTimeout(() => {
          refernece.forEach((ref) => {
            ref.classList.add("changeImage");
          });
          setReference([]);
          setReviewCard([]);
        }, 1500);
      }
      setReviewCard([]);
    }
  }
};
