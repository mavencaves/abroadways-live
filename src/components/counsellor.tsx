
const Counsellor = ({ items } : {items: any}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {items.map((item:any, index: number) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm border-0 overflow-hidden">
                    <div className="relative rounded-xl">
                        <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            className="w-full h-full rounded-xl object-cover"
                        />

                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                            <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-white/90 text-sm mb-2">{item.subtitle}</p>

                            {(item.experience || item.country || item.flag) && (
                                <div className="flex items-center justify-between text-sm">
                                    {item.experience && (
                                        <span className="text-white/90">{item.experience}</span>
                                    )}

                                    {(item.country || item.flag) && (
                                        <div className="flex items-center gap-2">
                                            {item.flag && <span className="text-2xl">{item.flag}</span>}
                                            {item.country && <span className="text-white/90">{item.country}</span>}
                                        </div>
                                    )}
                                </div>
                            )}

                            {item.additionalInfo && (
                                <div className="mt-2 text-white/80 text-xs">
                                    {item.additionalInfo}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Counsellor;
