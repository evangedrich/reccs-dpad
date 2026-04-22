import subregions from "@/app/lib/subregions";
import Globe from "@/app/components/Globe";

export async function generateStaticParams() {
    return subregions.map(subregion => ({
        slug: subregion.id,
    }));
}

export default async function MovieDetailView({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const subregion = subregions.find(subregion => subregion.id===slug);
    return (
        <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center bg-[#181818]">
            <div className="flex items-center justify-center w-[80%] h-[80%]">
                <div className="w-1/2">
                    <h1 className="text-[3.2vw] font-black leading-none">{subregion?.name}</h1>
                    <p>{subregion?.description}</p>
                    <Globe id={subregion?.id} />
                </div>
                <div className="w-1/2">
                    <h2>test</h2>
                </div>
            </div>
        </div>
    )
}