import { addcategories, addquestions, adderror, removeerror, addScore } from "../reducers/quizReducer";
import axios from "@/utils/axios";

export const asyncGetCategories = () => async (dispatch, getState) => {
    try {
        const { data } = await axios.get("/api_category.php");
        dispatch(addcategories(data.trivia_categories));
        return data.trivia_categories;

    } catch (error) {
        dispatch(adderror(error.response.data));
    }
};

export const addYourScore = () => async (dispatch, getState) => {
    try {
        
       await dispatch(addScore(1));

    } catch (error) {
        dispatch(adderror(error.response.data));
    }
};


export const asyncQuizData = (amount, category, difficulty) => async (dispatch, getState) => {

        try {
            const { data } = await axios.get(
                `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`
            );
            // console.log(data.results);

            const shuffleArray = (arr) => {
                return arr
                    .map((a) => [Math.random(), a])
                    .sort((a, b) => a[0] - b[0])
                    .map((a) => a[1]);
            };

            const updatedQuiz = data.results.reduce(
                (acc, cv, index) => [
                    ...acc,
                    {
                        questionno : index,
                        question: cv.question,
                        answer: cv.correct_answer,
                        options: shuffleArray([
                            ...cv.incorrect_answers,
                            cv.correct_answer,
                        ]),
                    },
                ],
                []
            );
            console.log(updatedQuiz);
            dispatch(addquestions(updatedQuiz));
        } catch (error) {
            console.log(error);
        }
    };


