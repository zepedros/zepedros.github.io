const navigation = [
    { name: 'HOME', href: '#', current: true },
    { name: 'ABOUT ME', href: '#/about-me/', current: false },
    { name: 'CONTACTS', href: '#/contacts', current: false }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NewHeader() {
    return (
        <div className="relative flex items-center justify-between h-16"> 
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    
                    <div className="hidden sm:block sm:ml-6">
                        <div className="flex space-x-4">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'px-3 py-2 rounded-md text-sm font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
        </div>
    )
}