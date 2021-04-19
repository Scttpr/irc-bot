export const calculateAnswer = (input) => {
    const splitInput = input.split('/');

    if (splitInput.length <= 1) {
        return null;
    }

    const FIRST_NUMBER = parseInt(splitInput[0].trim(), 10);
    const SECOND_NUMBER = parseInt(splitInput[1].trim(), 10);

    const sqrtFirstNumber = Math.sqrt(FIRST_NUMBER);
    const multipliedBySecondNumber = sqrtFirstNumber * SECOND_NUMBER;
    const roundedNumber = Math.round(multipliedBySecondNumber * 100) / 100;

    return roundedNumber;
}

export const getFormattedAnswer = (number) => `${process.env.ANSWER_MESSAGE} ${number}`;
