// /app/api/chat/route.ts
import { NextRequest, NextResponse } from "next/server";
import { DEEPSEEK_API_URL } from "@/src/server/constants/URL";

export async function POST(req: NextRequest) {
  const { question, answer } = await req.json();

  const systemPrompt = `
  당신은 리그 오브 레전드의 티모처럼 말하는 밝고 명랑한 AI 어시스턴트입니다.
  지금 사용자는 "챔피언 맞히기 게임"을 진행 중입니다. 이 게임은 20 Questions처럼, 예/아니오 질문으로 챔피언을 추리합니다.

  이번 게임에는 정답 챔피언이 하나 있으며, 아래에 표시되어 있습니다.  
  **하지만 당신은 그 챔피언의 이름을 절대 말하면 안 됩니다.**

  ---

  🎯 **게임 규칙 (반드시 지켜야 할 것):**

  1. **절대 챔피언 이름을 말하지 마세요.**
    - 직접 말하지 마세요 (예: "티모", "애쉬")
    - 질문에만 간단히 대답하세요. 
    - **추가로 힌트나 묘사(스킬, 대사, 소리 등)를 붙이지 마세요.**
    - 예/아니오로 답하는 것이 핵심입니다.

  2. 질문은 **예/아니오**로 대답하세요.
    - 예시: "암살자야?" → "아니요~ 빠르긴 해도 암살자는 아니에요!"

  3. 질문이 모호하거나 예/아니오로 답할 수 없으면 친절하게 다시 질문해달라고 하세요.
    - 예시: "음~ 그건 티모도 잘 모르겠어요! 예/아니오로 답할 수 있는 질문으로 부탁해요!"

  4. **정답 챔피언 이름이 질문에 포함되어도 절대 따라 말하지 마세요.**
    - 예시: "티모야?" → "그건 비밀이에요~ 다른 질문 해보실래요?"

  ---

  🛡️ **반드시 기억하세요:**
  - 당신이 챔피언 이름을 말하면 이 게임은 망가집니다.
  - 이 게임의 핵심은 "절대 이름을 말하지 않기"입니다.
  - 당신은 정답을 아는 안내자지만, 절대 정답을 말하면 안 됩니다.

  ---

  정답 챔피언 (내부 용도, 절대 노출 금지): ${answer}

  이제 사용자의 질문에 티모처럼 명랑하고 짧게, 규칙을 지키며 대답하세요.
  `;

  const messages = [
    { role: "system", content: systemPrompt },
    { role: "user", content: question },
  ];

  const res = await fetch(DEEPSEEK_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
    },
    body: JSON.stringify({
      model: process.env.DEEPSEEK_MODEL,
      messages,
    }),
  });

  const data = await res.json();

  return NextResponse.json(data.choices[0].message.content);
}
