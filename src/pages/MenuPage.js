import Menu from '../components/Menu'
import Panel from '../components/Panel'
import BeerGif from '../images/BeerGif2.gif'

function MenuPage() {
    const menuItems = [
        {
            section: "Appetizers",
            content : [
                {
                    label: "Fondue",
                    description: "Nulla facilisi nullam vehicula ipsum.",
                    price: "$10.99"
                },
                {
                    label: "Fondue1",
                    description: "Nulla facilisi nullam vehicula ipsum.",
                    price: "$10.99"
                },
                {
                    label: "Fondue2",
                    description: "Nulla facilisi nullam vehicula ipsum.",
                    price: "$10.99"
                },
                {
                    label: "Fondue3",
                    description: "Nulla facilisi nullam vehicula ipsum.",
                    price: "$10.99"
                },
            ]
        },
        {
            section: "Entrees",
            content : [
                {
                    label: "Fondue4",
                    description: "Nulla facilisi nullam vehicula ipsum.",
                    price: "$10.99"
                },
                {
                    label: "Fondue5",
                    description: "Nulla facilisi nullam vehicula ipsum.",
                    price: "$10.99"
                },
                {
                    label: "Fondue6",
                    description: "Nulla facilisi nullam vehicula ipsum.",
                    price: "$10.99"
                },
                {
                    label: "Fondue7",
                    description: "Nulla facilisi nullam vehicula ipsum.",
                    price: "$10.99"
                },
            ]
        },
        {
            section: "Desserts",
            content : [
                {
                    label: "Fondue8",
                    description: "Nulla facilisi nullam vehicula ipsum.",
                    price: "$10.99"
                },
                {
                    label: "Fondue9",
                    description: "Nulla facilisi nullam vehicula ipsum.",
                    price: "$10.99"
                },
                {
                    label: "Fondue10",
                    description: "Nulla facilisi nullam vehicula ipsum.",
                    price: "$10.99"
                },
                {
                    label: "Fondue11",
                    description: "Nulla facilisi nullam vehicula ipsum.",
                    price: "$10.99"
                },
            ]
        },
    ]

    return (
        <div>
            <Panel className="h-[70vh]" bgImage={BeerGif}>
                <div className="text-8xl text-white font-bold underline text-center">
                    Our Menu
                </div>
            </Panel>
            <Menu menuItems={menuItems} />
        </div>
    )
}

export default MenuPage;