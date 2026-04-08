import subregions from "@/app/lib/subregions";

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
            <div>
                <h1 className="text-[5vw] font-black">{subregion?.name}</h1>
            </div>
        </div>
    )
}