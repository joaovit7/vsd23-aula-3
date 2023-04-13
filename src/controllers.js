

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

   product.push({
    id,
    descricao,
    valor,
    qtde,
   })
    return response.json({ data: product})
},

async hello2(request, response) {
return response.json({ msg: 'hello world 2'})
}
}