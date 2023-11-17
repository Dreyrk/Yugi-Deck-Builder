export default async function Page({
  params,
}: {
  params: { userId: string; deckId: string };
}) {
  const deck = await getDeck(deckId);
  return (
    <div>
      <h1>{deck._id}</h1>
    </div>
  );
}
