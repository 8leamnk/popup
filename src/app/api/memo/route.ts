import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = Number(searchParams.get('id'));
  const isUnique = Number(searchParams.get('isUnique'));

  try {
    let result = null;

    if (isUnique) {
      const response = await prisma.memo.findUnique({ where: { id } });
      result = { ...response, id: Number(response?.id) };
    } else {
      const response = await prisma.memo.findMany({
        where: { id: { gte: id, lte: id + 9 } },
      });
      result = response.map((item) => {
        return { ...item, id: Number(item.id) };
      });
    }

    return Response.json({ data: result });
  } catch (error) {
    return;
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const response = await prisma.memo.create({
      data: {
        title: body.title,
        content: body.content,
      },
    });

    // response.id 값을 가져오면 505 에러가 난다. BigInt를 Number로 변환하니 오류가 나지 않는다.
    return Response.json({
      status: 200,
      data: {
        id: Number(response.id),
        time: response.createdAt,
        title: response.title,
        content: response.content,
      },
      message: '메모가 정상적으로 등록되었습니다.',
    });
  } catch (error) {
    return;
  }
}