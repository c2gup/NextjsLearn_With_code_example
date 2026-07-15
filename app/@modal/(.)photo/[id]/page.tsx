import Modal from "@/components/Modal";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <Modal>
      <h1>PHOTO MODAL</h1>

      <h2>Photo : {id}</h2>
    </Modal>
  );
}
