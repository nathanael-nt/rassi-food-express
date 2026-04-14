export const categorias = [
    {
        id: 1,
        descricao: "Burguers",
        icone: require("../assets/cat-burguer.png")
    },
    {
        id: 2,
        descricao: "Pizza",
        icone: require("../assets/cat-pizza.png")
    },
    {
        id: 3,
        descricao: "Fritas",
        icone: require("../assets/cat-fritas.png")
    },
    {
        id: 4,
        descricao: "Sushi",
        icone: require("../assets/cat-sushi.png")
    },
    {
        id: 5,
        descricao: "Churrasco",
        icone: require("../assets/cat-churrasco.png")
    },
    {
        id: 6,
        descricao: "Sucos",
        icone: require("../assets/cat-suco.png")
    },
    {
        id: 7,
        descricao: "Doces",
        icone: require("../assets/cat-sobremesa.png")
    }
];

export const banners = [
    {
        id: 1,
        descricao: "Pizzas",
        icone: require("../assets/banner1.png")
    },
    {
        id: 2,
        descricao: "Saladas",
        icone: require("../assets/banner2.png")
    },
    {
        id: 3,
        descricao: "Churrasco",
        icone: require("../assets/banner3.png")
    }
];

export const lojas = [
    {
        id: 1,
        status: false,
        nome: "Komiketo Sanduicheria",
        endereco: "Av. T4 - Serrinha - Goiânia - GO",
        logotipo: "loja01",
        taxa: 8.00,
        cardapio: []
    },
    {
        id: 2,
        status: false,
        nome: "Coco Bambu",
        endereco: "Flamboyant Shopping Center - Goiânia - GO",
        logotipo: "loja02",
        taxa: 5.00,
        cardapio: [
            {
                idCategoria: 1,
                categoria: "Ofertas",
                itens: [
                    {
                        idProduto: 1,
                        nome: "Pizza Calabresa",
                        descricao: "Massa artesanal, mussarela e calabresa. Server de 3 a 4 pessoas. Molho de tomate 100% natural e ingredientes selecionados",
                        valor: 30.00,
                        foto: "produto1"
                    },
                    {
                        idProduto: 2,
                        nome: "Coca-Cola Lata",
                        descricao: "Coca-Cola lata de 300ml trincando de gelada",
                        valor: 5.00,
                        foto: "produto2"
                    }
                ]
            },
            {
                idCategoria: 2,
                categoria: "Mais Pedidos",
                itens: [
                    {
                        idProduto: 3,
                        nome: "Pizza Mussarela",
                        descricao: "Massa artesanal, recheio de mussarela. Server de 3 a 4 pessoas. Molho de tomate 100% natural e ingredientes selecionados",
                        valor: 30.00,
                        foto: "produto1"
                    },
                    {
                        idProduto: 4,
                        nome: "Coca-Cola Litro",
                        descricao: "Coca-Cola lata de 300ml trincando de gelada",
                        valor: 5.00,
                        foto: "produto2"
                    },
                    {
                        idProduto: 5,
                        nome: "Salada Rica",
                        descricao: "Coca-Cola lata de 300ml trincando de gelada",
                        valor: 25.00,
                        foto: "produto3"
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        status: false,
        nome: "Kid Abelha Sanduicheria",
        endereco: "Praça Walter  Santos - Goiânia - GO",
        logotipo: "loja03",
        taxa: 15.00,
        cardapio: [
            {
                idCategoria: 1,
                categoria: "Ofertas",
                itens: [
                    {
                        idProduto: 1,
                        nome: "Pizza Calabresa",
                        descricao: "Massa artesanal, mussarela e calabresa. Server de 3 a 4 pessoas. Molho de tomate 100% natural e ingredientes selecionados",
                        valor: 30.00,
                        foto: "produto1"
                    },
                    {
                        idProduto: 2,
                        nome: "Coca-Cola Lata",
                        descricao: "Coca-Cola lata de 300ml trincando de gelada",
                        valor: 5.00,
                        foto: "produto2"
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        status: false,
        nome: "1008 Bar e Restaurante",
        endereco: "Al. Leopoldo de Bulhões - Goiânia - GO",
        logotipo: "loja04",
        taxa: 9.00,
        cardapio: []
    },
    {
        id: 5,
        status: false,
        nome: "Rafa’s Sanduicheria",
        endereco: "Jardim América - Goiânia - GO",
        logotipo: "loja05",
        taxa: 12.00,
        cardapio: []
    }
];

export const imageAll = {
    banner1: require("../assets/banner1.png"),
    banner2: require("../assets/banner2.png"),
    banner3: require("../assets/banner3.png"),
    loja01: require("../assets/loja01.png"),
    loja02: require("../assets/loja02.png"),
    loja03: require("../assets/loja03.png"),
    loja04: require("../assets/loja04.png"),
    loja05: require("../assets/loja05.png"),
    produto1: require("../assets/pizza.png"),
    produto2: require("../assets/coca.png"),
    produto3: require("../assets/salada.png")
};