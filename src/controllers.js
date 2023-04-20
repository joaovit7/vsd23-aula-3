

const product = [
{ 
  id:1,
  descricao: 'coca cola 2lts',
  valor:10.00,
  qtde:10  
},
{
  id:2,
  descricao:'cerveja',
  valor:5.80,
  qtde:50
  },
  {
  id:3,
  descricao:'agua',
  valor:2.00,
  qtde:5
}
]



   module.exports = {
   async createcart(request, response) {

   const{id,descricao,valor,qtde}= request.body


    const existsproduct = product.find(product => product.id === id)
    if (existsproduct) {
    return response.status(400).json({
    error: 'produto já cadastrado'
   })
   }

    const existsdescription = product.find(product => product.descrição)
    if (existsdescription) {
    return response.status(400).json({
    error: 'produto ja cadastrado'
    })

    
   }
const product ={
  id,
  descricao,
  valor,
  qtde,
}

    product.push({
    id,
    descricao,
    valor,
    qtde,
   })
    return response.json({ data: product})
},
  async getlistofcart(request, response) {
  return response.json({ data: products })
},

 async createusercart(request,response) {

 const {item} = request.body

  for (const product of item) {
  const productexists = products.find(prd => prd.id === product.id )
  if(productexists) {
  return response.status(400).json({
  error: 'produto não encontrado'
  })
}

if(productexists.qtde < product.qtde) {
return responde.status(400).json({
  error: 'quantidade não disponivel'
})
}

   const useritems = {
   productid: productexists.id,
   descricao: productexists.descricao,
   qtde: product.qtde,
   valor: product.qtde = productexists.valor
}

usercart.push(useritems)

const index = products.findindex(idx => idx.id === product.id)
products[index].qtde = products[index].qtde - product.qtde

return response.json({
  order: useritems,
  steck: products 
})
}



 return response.json({ data: true})
}
   }

