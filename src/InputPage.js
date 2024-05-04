import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OpenAI from "openai";

function InputPage() {
  const [inputText, setInputText] = useState("");
  const navigate = useNavigate();
  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content:
              '너는 사용자의 꿈 내용을 입력받고 해몽해주는 꿈 해몽 전문가야. json data file로 사용할 수 있게끔 구분해서 답변해줘 "dream_score"_꿈의 점수(100점 만점 중 몇 점 인지 소수점 첫째자리까지 표현) "comment"_한 줄 코멘트(15자 이내로 마지막엔 ~를 조심하세요. ~를 도전하셔도 됩니다.라고 문장 마무리) "element_meanings"_각 요소 별 의미(고양이의 의미, 칼의 의미, 작은 쥐로 변하는 것의 의미 등) : 안에 "큰_고양이의_의미", "칼의_의미", "작은_쥐로_변하는_것의_의미"와 같이 한글로 나눠서 해석 이때, 3번째 각 요소 별 의미는 각 요소 별로 300자 정도로 작성해줘_그리고 사용자가 오 그런가? 싶은 느낌이 들도록 _최근 중요한 과제에 직면하지 않으셨나요?_처럼 User가 User 본인에 대해서 생각해볼 수 있도록 하는 질문을 던져줘',
          },
          {
            role: "user",
            content:
              "큰 고양이가 나를 뒤쫓다가 앞에 칼이 있어서 그 칼을 쥔 다음 뒤를 돌아 겁을 줬더니, 큰 고양이가 빛나면서 작은 쥐로 변하는 꿈",
          },
          // {
          //   role: "assistant",
          //   content: "ㅇㅇㅇㅇ"},
          {
            role: "user",
            content: inputText,
          },
        ],
        model: "gpt-4-turbo-2024-04-09",
      });

      // console.log(result.choices[0].message.content);
      navigate("/result", {
        state: { response: result.choices[0].message.content },
      });
    } catch (error) {
      console.error("Error sending data to GPT: ", error);
    }
  };

  return (
    <div class="inputpage-container">
      <div class="user-information-container"></div>
      <div class="title-container"></div>
      <div class="subtitle-container"></div>
      <div class="user-input-container">
        <textarea
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="이 부분을 탭해서 입력해주세요 !"
          class="user-textarea"
        />
      </div>
      <div class="analyze-button-container">
        <button
          type="submit"
          onClick={handleSubmit}
          className="analyze-button"
        ></button>
      </div>
    </div>
  );
}

export default InputPage;
