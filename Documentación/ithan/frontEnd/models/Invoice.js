var mongoose = require('mongoose');

var InvoiceSchema = new mongoose.Schema({
  placa: String,
  nombre_cliente: String,
  minutos:  {  type: Number, default:1 },
  valor_minuto:  {  type: Number, default:1 },
  fecha: { type: Date, default: Date.now },
  total:  {  type: Number, default:1 }
});

InvoiceSchema
.pre('save', function(next){
  this.total = this.minutos*this.valor_minuto
  next();   
});

module.exports = mongoose.model('Invoice', InvoiceSchema);
