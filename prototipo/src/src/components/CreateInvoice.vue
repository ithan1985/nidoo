<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Crear Factura
        <b-link href="#/">(Lista Facturas)</b-link>
      </h2>
      <b-form @submit="onSubmit">
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Placa">
          <b-form-input id="placa" :state="state" v-model.trim="invoice.placa"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Nombre del CLiente">
          <b-form-input id="nombre_cliente" :state="state" v-model.trim="invoice.nombre_cliente"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Cantidad de Minutos">
          <b-form-input id="minutos" :state="state" v-model.trim="invoice.minutos"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Valor Por Minuto">
          <b-form-input id="valor_minuto" :state="state" v-model.trim="invoice.valor_minuto"></b-form-input>
        </b-form-group>
       <b-button type="submit" variant="primary">Guardar</b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'CreateInvoice',
  data () {
    return {
      invoice: {}
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      axios.post(`http://157.253.238.35/invoice`, this.invoice)
      .then(response => {
        this.$router.push({
          name: 'ShowInvoice',
          params: { id: response.data._id }
        })
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>
