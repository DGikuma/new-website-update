export default function MediaLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="relative w-full min-h-screen px-6 md:px-12 lg:px-24 py-12 overflow-hidden">
            {/* 🔥 Background Image Layer */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/images/media.png')",
                    backgroundAttachment: "fixed",
                }}
            />

            {/* ✨ Overlay (dark gradient + brand tint) */}
            <div className="absolute inset-0 bg-black/60 md:bg-gradient-to-b md:from-black/70 md:via-primary/20 md:to-red-700/20 backdrop-blur-[2px]" />

            {/* 🌟 Foreground Content */}
            <div className="relative z-10">{children}</div>
        </section>
    );
}
