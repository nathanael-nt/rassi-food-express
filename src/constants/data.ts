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
                        foto: "produto4"
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
        cardapio: [
            {
                idCategoria: 1,
                categoria: "Ofertas",
                itens: []
            },
            {
                idCategoria: 2,
                categoria: "Mais Pedidos",
                itens: []
            },
            {
                idCategoria: 3,
                categoria: "Combos",
                itens: []
            }
        ]
    }
];

export const oldPedidos = [
    {
        id: 0,
        idLoja: 0,
        nomeLoja: "",
        logoLoja: "",
        total: 0.00,
        status: false,
    }
];

export const pedidos = [
    {
        id: 1000,
        idProduto: 0,
        nomeProd: "",
        descProd: "",
        fotoProd: "",
        quantidade: 0,
        total: 0.00,
        status: false,
    }
];

export const users = [
    {
        id: 1,
        nome: "Luiz Rassi",
        email: "luiz.rassi@efg.com",
        senha: "12345",
        endereco: "Rua dos Condes",
        complemento: " Ap-1000",
        bairro: "Buriti Sereno",
        cidade: "Aparecida de Goiânia",
        numero: "1025",
        uf: "GO",
        cep: "74000-000",
        telefone: "62 9 9999-9999",
        status: false,
    },
    {
        id: 2,
        nome: "Teste Rassi",
        email: "teste.rassi@efg.com",
        senha: "12345",
        endereco: "Rua dos Condes",
        complemento: " Ap-1000",
        bairro: "Buriti Sereno",
        cidade: "Aparecida de Goiânia",
        numero: "1025",
        uf: "GO",
        cep: "74000-000",
        telefone: "62 9 9999-9999",
        status: false,
    }
];

export const imageAll: Record<string, string | number> = {
    banner1: require("../assets/banner1.png"),
    banner2: require("../assets/banner2.png"),
    banner3: require("../assets/banner3.png"),
    // loja01: "https://static.ifood-static.com.br/image/upload/t_high/logosgde/e6a135d1-4e37-461e-81c9-f5ed38818511/201906251302_ZvWv_i.jpg", //require("../assets/loja01.png"),
    loja01: "https://static.ifood-static.com.br/image/upload/t_high/logosgde/571ae136-afc0-42e3-9d0f-68438da07c08/202502041616_De6i_d.jpg", //require("../assets/loja01.png"),
    loja02: "https://static.ifood-static.com.br/image/upload/t_high/logosgde/45db57a0-5231-414f-97bd-223fd6382fc3/202104052038_575g_i.jpg", //require("../assets/loja02.png"),
    // loja03: "https://static.ifood-static.com.br/image/upload/t_low/logosgde/00d448d2-f09f-405e-b819-6971a035b3fb/202101281546_h7cr_i.jpg", //require("../assets/loja03.png"),
    loja03: "https://static.ifood-static.com.br/image/upload/t_high/logosgde/f97ed143-9e00-4a60-9425-a34babfdc740/202307052006_KkuM_i.jpg", //require("../assets/loja03.png"),
    // loja04: "https://static.ifood-static.com.br/image/upload/t_high/logosgde/31a25225-c079-4bcc-a886-b2c0f0d42e22/202305202307_6Vmx_i.jpg", //require("../assets/loja04.png"),
    loja04: "https://static.ifood-static.com.br/image/upload/t_low/logosgde/744ab696-8297-48b2-9b41-71b76cc0e5df/202307051535_mR9N_i.jpg", //require("../assets/loja04.png"),
    loja05: "https://static.ifood-static.com.br/image/upload/t_high/logosgde/df8cb89f-e521-45d2-ad74-ceac53c387f7/202311170922_b4N5_i.jpg", //require("../assets/loja05.png"),
    loja06: "https://static.ifood-static.com.br/image/upload/t_high/logosgde/d6abf47e-59e5-4b40-906b-7be3be95f38a/202602182012_5CD8.png", //require("../assets/loja01.png"),
    // produto1: require("../assets/pizza.png"),
    produto1: "https://institucional.ifood.com.br/wp-content/uploads/2023/10/CAPA-PIZZA-1024x692-1.webp", //require("../assets/pizza.png"),
    produto2: require("../assets/coca.png"),
    produto3: require("../assets/salada.png"),
    // produto4: require("../assets/salada.png")
    produto4: "https://img.freepik.com/psd-premium/pizza-com-queijo-mozzarella-isolado-em-fundo-transparente-vista-superior_220739-59990.jpg?semt=ais_hybrid&w=740&q=80" //require("../assets/salada.png")
};