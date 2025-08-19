import Link_Button from "@/app/components/link-button";

export default async function Page({ params }: { params: { project: string } }) {
  const { project } = await params;

  return (
    <div className="">
      <h1 className="text-3xl block w-full text-center">{project}</h1>
      <img src="https://picsum.photos/seed/picsum/200/300" alt="thumbnail of project" className="h-[10rem] rounded-2xl" />
      <p className="m-2 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quia rerum unde doloribus harum recusandae eaque dolor possimus in delectus veniam et nisi minus, ab, officia repudiandae fugit qui corporis, ipsa aliquam sapiente. Laborum incidunt, hic optio iusto corrupti aspernatur quod voluptates facere. Vel, delectus. Quibusdam a eveniet, officia cum sint quis. Voluptate voluptatem debitis, repellendus consequatur quas provident sequi unde obcaecati expedita neque delectus exercitationem deleniti amet hic rem libero asperiores ex magni pariatur cumque. Corrupti ullam libero unde corporis, odit ab eos laudantium tempora expedita, quas quo maxime consequuntur sequi vitae necessitatibus recusandae animi illo, aliquid esse! Recusandae.
      </p>
      <p className="m-2 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quia rerum unde doloribus harum recusandae eaque dolor possimus in delectus veniam et nisi minus, ab, officia repudiandae fugit qui corporis, ipsa aliquam sapiente. Laborum incidunt, hic optio iusto corrupti aspernatur quod voluptates facere. Vel, delectus. Quibusdam a eveniet, officia cum sint quis. Voluptate voluptatem debitis, repellendus consequatur quas provident sequi unde obcaecati expedita neque delectus exercitationem deleniti amet hic rem libero asperiores ex magni pariatur cumque. Corrupti ullam libero unde corporis, odit ab eos laudantium tempora expedita, quas quo maxime consequuntur sequi vitae necessitatibus recusandae animi illo, aliquid esse! Recusandae.
      </p>

      <Link_Button href="https://portfolio-rjm.netlify.app/" target="_blank">Portfolio</Link_Button>
    </div>
  );
}