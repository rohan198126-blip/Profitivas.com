import type { LocalizedCalcEntry } from './types';

export const esCalculators: Record<string, LocalizedCalcEntry> = {
  'profit-margin-calculator': {
    name: 'Calculadora de Margen de Beneficio',
    shortName: 'Margen de Beneficio',
    tagline: 'Calcule su margen de beneficio a partir del coste y del precio de venta.',
    description: 'Calcule rápidamente el margen de beneficio, el recargo (markup) y la ganancia bruta a partir del coste y precio de venta, o encuentre el precio objetivo según el margen deseado.',
    seoTitle: 'Calculadora de Margen de Beneficio — Calcule su Margen',
    seoDescription: 'Calcule el porcentaje de margen de beneficio, ganancia bruta y recargo a partir del coste unitario y precio de venta.',
    formulas: [
      {
        title: 'Ganancia Bruta',
        formula: 'Ganancia Bruta = Precio de Venta - Coste',
        plainText: 'Reste el coste directo unitario (COGS) del precio de venta.',
        explanation: 'Representa los ingresos monetarios directos retenidos en cada unidad para cubrir gastos operativos.',
      },
      {
        title: 'Margen de Beneficio (%)',
        formula: 'Margen (%) = (Ganancia Bruta ÷ Precio de Venta) × 100',
        plainText: 'Divida la ganancia bruta entre el precio de venta y multiplique por 100.',
        explanation: 'Mide la porción del precio de venta retenida como beneficio tras cubrir costes directos. No puede superar el 100%.',
      },
      {
        title: 'Recargo / Markup (%)',
        formula: 'Recargo (%) = (Ganancia Bruta ÷ Coste) × 100',
        plainText: 'Divida la ganancia bruta entre el coste y multiplique por 100.',
        explanation: 'El porcentaje añadido sobre el coste unitario para establecer el precio final.',
      },
    ],
    workedExample: {
      title: 'Ejemplo Minorista Estándar (Coste 40 € / Venta 100 €)',
      scenario: 'Un comercio adquiere un producto por 40,00 € y lo vende a sus clientes por 100,00 €.',
      inputs: { 'Coste Unitario': '40,00 €', 'Precio de Venta': '100,00 €' },
      steps: [
        'Ganancia Bruta = 100,00 € - 40,00 € = 60,00 €',
        'Margen de Beneficio = (60,00 € ÷ 100,00 €) × 100 = 60,00%',
        'Recargo (Markup) = (60,00 € ÷ 40,00 €) × 100 = 150,00%',
      ],
      results: { 'Ganancia Bruta': '60,00 €', 'Margen de Beneficio': '60,00%', 'Recargo (Markup)': '150,00%' },
      takeaway: 'Un margen del 60,00% significa que de cada 100 € ingresados, 60 € quedan para absorber gastos generales y generar beneficio neto.',
    },
    assumptions: [
      { term: 'Precio de Venta', definition: 'Importe final facturado al cliente excluyendo impuestos indirectos deducibles.' },
      { term: 'Coste Unitario (COGS)', definition: 'Coste directo de adquisición, fabricación o entrega por unidad de producto.' },
    ],
    faqs: [
      {
        question: '¿Cuál es la diferencia entre margen y recargo (markup)?',
        answer: 'El margen expresa la ganancia como porcentaje del precio de venta, mientras que el recargo (markup) expresa la ganancia como porcentaje del coste.',
      },
      {
        question: '¿Cómo calcular el precio de venta necesario para un margen determinado?',
        answer: 'Divida el coste unitario entre (1 - margen decimal). Por ejemplo, para un 40% de margen con coste de 60 €, divida 60 entre 0,60 = 100 €.',
      },
    ],
  },
  'markup-calculator': {
    name: 'Calculadora de Recargo (Markup)',
    shortName: 'Recargo (Markup)',
    tagline: 'Calcule el porcentaje de recargo sobre el coste y el precio de venta final.',
    description: 'Determine el porcentaje de recargo sobre el coste, la ganancia bruta y el margen resultante, o calcule el precio objetivo a partir del recargo deseado.',
    seoTitle: 'Calculadora de Markup — Calcule el Recargo sobre el Coste',
    seoDescription: 'Calcule el porcentaje de markup, ganancia bruta y precio de venta a partir del coste unitario.',
    formulas: [
      {
        title: 'Recargo / Markup (%)',
        formula: 'Markup (%) = ((Precio de Venta - Coste) ÷ Coste) × 100',
        plainText: 'Reste el coste del precio, divida entre el coste y multiplique por 100.',
        explanation: 'Indica en qué proporción se incrementa el coste original para fijar el precio de catálogo.',
      },
    ],
    workedExample: {
      title: 'Ejemplo de Fijación de Precios con Markup',
      scenario: 'Una empresa produce un bien a un coste de 50,00 € y aplica un markup del 80%.',
      inputs: { 'Coste Unitario': '50,00 €', 'Markup Objetivo': '80%' },
      steps: ['Precio de Venta = 50,00 € × (1 + 0,80) = 90,00 €', 'Ganancia Bruta = 90,00 € - 50,00 € = 40,00 €'],
      results: { 'Precio de Venta': '90,00 €', 'Ganancia Bruta': '40,00 €', 'Margen Resultante': '44,44%' },
      takeaway: 'Un markup del 80% produce un margen del 44,44% sobre el precio de venta.',
    },
    assumptions: [
      { term: 'Coste Base', definition: 'Coste total directo en el que se incurre antes de aplicar el sobreprecio.' },
    ],
    faqs: [
      {
        question: '¿Por qué el markup siempre es numéricamente superior al margen?',
        answer: 'Porque el markup se calcula sobre una base menor (el coste), mientras que el margen se calcula sobre una base mayor (el precio de venta).',
      },
    ],
  },
  'selling-price-calculator': {
    name: 'Calculadora de Precio de Venta',
    shortName: 'Precio de Venta',
    tagline: 'Encuentre el precio de venta exacto según su coste y objetivo de margen o recargo.',
    description: 'Calcule con exactitud el precio de catálogo necesario para cubrir sus costes y alcanzar el margen de beneficio deseado.',
    seoTitle: 'Calculadora de Precio de Venta — Fije Precios Rentables',
    seoDescription: 'Determine el precio de venta requerido en función de su coste y margen o markup objetivo.',
    formulas: [
      {
        title: 'Precio desde Margen',
        formula: 'Precio = Coste ÷ (1 - Margen)',
        plainText: 'Divida el coste entre uno menos el margen en formato decimal.',
        explanation: 'Garantiza que la ganancia represente exactamente el porcentaje deseado del precio final.',
      },
    ],
    workedExample: {
      title: 'Cálculo de Precio con Margen del 30%',
      scenario: 'Un producto con coste de 70,00 € requiere un margen bruto del 30%.',
      inputs: { 'Coste': '70,00 €', 'Margen': '30%' },
      steps: ['Precio = 70,00 € ÷ (1 - 0,30) = 100,00 €'],
      results: { 'Precio de Venta': '100,00 €', 'Ganancia': '30,00 €' },
      takeaway: 'Para ganar un 30% de margen real con un coste de 70 €, el precio debe ser 100 €.',
    },
    assumptions: [{ term: 'Margen Objetivo', definition: 'Porcentaje del precio de venta que debe quedar como beneficio.' }],
    faqs: [
      {
        question: '¿Por qué no basta con sumar el 30% al coste?',
        answer: 'Sumar el 30% al coste aplica un markup, dando 91 €, lo que produce un margen de solo el 23,1%, no el 30% pretendido.',
      },
    ],
  },
  'discount-calculator': {
    name: 'Calculadora de Descuentos',
    shortName: 'Descuentos',
    tagline: 'Calcule el precio final rebajado y el ahorro monetario obtenido.',
    description: 'Calcule instantáneamente el precio final tras aplicar un descuento porcentual o determine el porcentaje de rebaja aplicado.',
    seoTitle: 'Calculadora de Descuentos — Calcule el Precio Rebajado',
    seoDescription: 'Calcule el precio de venta con descuento y el ahorro monetario exacto.',
    formulas: [
      {
        title: 'Precio con Descuento',
        formula: 'Precio Final = Precio Original × (1 - (Descuento ÷ 100))',
        plainText: 'Multiplique el precio original por uno menos el descuento porcentual.',
        explanation: 'Calcula el importe neto a pagar tras restar la rebaja comercial.',
      },
    ],
    workedExample: {
      title: 'Descuento del 25% en Producto de 80 €',
      scenario: 'Un artículo de 80,00 € tiene un descuento promocional del 25%.',
      inputs: { 'Precio Original': '80,00 €', 'Descuento': '25%' },
      steps: ['Ahorro = 80,00 € × 0,25 = 20,00 €', 'Precio Final = 80,00 € - 20,00 € = 60,00 €'],
      results: { 'Precio Final': '60,00 €', 'Ahorro': '20,00 €' },
      takeaway: 'El cliente paga 60 € y ahorra 20 €.',
    },
    assumptions: [{ term: 'Precio Original', definition: 'Precio antes de aplicar la deducción promocional.' }],
    faqs: [
      {
        question: '¿Cómo calcular el porcentaje de descuento entre dos precios?',
        answer: 'Divida el ahorro entre el precio original y multiplique por 100: ((Original - Rebajado) ÷ Original) × 100.',
      },
    ],
  },
  'gross-profit-calculator': {
    name: 'Calculadora de Beneficio Bruto',
    shortName: 'Beneficio Bruto',
    tagline: 'Calcule los ingresos brutos y el margen bruto a partir de los ingresos totales y el coste de ventas.',
    description: 'Analice la rentabilidad bruta de su negocio o línea de productos a partir de la facturación y el coste de mercancías vendidas (COGS).',
    seoTitle: 'Calculadora de Beneficio Bruto — Analice Ganancia y Margen',
    seoDescription: 'Calcule el beneficio bruto y el margen bruto a partir de los ingresos y el coste de los bienes vendidos.',
    formulas: [
      {
        title: 'Beneficio Bruto',
        formula: 'Beneficio Bruto = Ingresos - Coste de Ventas (COGS)',
        plainText: 'Reste el coste de los bienes vendidos de los ingresos totales.',
        explanation: 'Muestra la ganancia operativa primaria antes de deducir gastos fijos e impuestos.',
      },
    ],
    workedExample: {
      title: 'Análisis de Facturación Mensual',
      scenario: 'Una empresa factura 50.000 € con un coste directo de mercancías de 20.000 €.',
      inputs: { 'Ingresos': '50.000 €', 'Coste de Ventas': '20.000 €' },
      steps: ['Beneficio Bruto = 50.000 € - 20.000 € = 30.000 €', 'Margen Bruto = (30.000 € ÷ 50.000 €) × 100 = 60,00%'],
      results: { 'Beneficio Bruto': '30.000 €', 'Margen Bruto': '60,00%' },
      takeaway: 'La empresa genera 30.000 € de margen bruto para hacer frente a salarios, alquileres y beneficio neto.',
    },
    assumptions: [{ term: 'COGS', definition: 'Coste directo de fabricación o compra de los productos comercializados.' }],
    faqs: [
      {
        question: '¿Cuál es la diferencia entre beneficio bruto y beneficio neto?',
        answer: 'El beneficio bruto solo resta los costes directos de ventas. El beneficio neto resta además todos los gastos operativos, amortizaciones e impuestos.',
      },
    ],
  },
  'break-even-calculator': {
    name: 'Calculadora de Punto de Equilibrio',
    shortName: 'Punto de Equilibrio',
    tagline: 'Encuentre el volumen de ventas e ingresos necesarios para cubrir todos sus costes fijos y variables.',
    description: 'Calcule el punto exacto en el que los ingresos igualan los costes totales y el negocio empieza a generar beneficios.',
    seoTitle: 'Calculadora de Punto de Equilibrio — Calcule Unidades y Facturación',
    seoDescription: 'Determine cuántas unidades o qué volumen de ventas necesita para cubrir costes fijos y variables.',
    formulas: [
      {
        title: 'Unidades de Equilibrio',
        formula: 'Unidades = Costes Fijos ÷ (Precio Unitario - Coste Variable Unitario)',
        plainText: 'Divida los costes fijos entre el margen de contribución unitario.',
        explanation: 'Indica el número exacto de unidades necesarias para alcanzar beneficio cero.',
      },
    ],
    workedExample: {
      title: 'Cálculo de Punto de Equilibrio Operativo',
      scenario: 'Costes fijos mensuales de 6.000 €, precio unitario de 50 € y coste variable de 20 €.',
      inputs: { 'Costes Fijos': '6.000 €', 'Precio': '50 €', 'Coste Variable': '20 €' },
      steps: ['Margen de Contribución = 50 € - 20 € = 30 €', 'Unidades = 6.000 € ÷ 30 € = 200 unidades'],
      results: { 'Unidades de Equilibrio': '200', 'Ingresos de Equilibrio': '10.000 €' },
      takeaway: 'A partir de la unidad 201, cada venta aporta 30 € de beneficio neto directo.',
    },
    assumptions: [{ term: 'Costes Fijos', definition: 'Gastos que no varían con el volumen de producción (alquiler, seguros, nóminas base).' }],
    faqs: [
      {
        question: '¿Cómo reduce una empresa su punto de equilibrio?',
        answer: 'Aumentando el precio de venta, reduciendo costes variables unitarios o recortando costes fijos estructurales.',
      },
    ],
  },
  'target-profit-calculator': {
    name: 'Calculadora de Beneficio Objetivo',
    shortName: 'Beneficio Objetivo',
    tagline: 'Calcule el volumen de ventas necesario para alcanzar su meta de beneficio neto.',
    description: 'Determine cuántas unidades o qué facturación total debe alcanzar para cubrir costes fijos y obtener su ganancia proyectada.',
    seoTitle: 'Calculadora de Beneficio Objetivo — Ventas Necesarias para su Meta',
    seoDescription: 'Calcule el volumen de ventas e ingresos necesarios para alcanzar un beneficio empresarial determinado.',
    formulas: [
      {
        title: 'Unidades para Beneficio Objetivo',
        formula: 'Unidades = (Costes Fijos + Beneficio Objetivo) ÷ Margen de Contribución',
        plainText: 'Sume los costes fijos y el beneficio deseado, y divida entre el margen unitario.',
        explanation: 'Proyecta el volumen de ventas necesario para cumplir objetivos financieros.',
      },
    ],
    workedExample: {
      title: 'Meta de 15.000 € de Beneficio Mensual',
      scenario: 'Costes fijos de 10.000 €, beneficio objetivo de 15.000 € y margen de contribución de 50 € por unidad.',
      inputs: { 'Costes Fijos': '10.000 €', 'Beneficio Objetivo': '15.000 €', 'Margen Contribución': '50 €' },
      steps: ['Total Requerido = 10.000 € + 15.000 € = 25.000 €', 'Unidades = 25.000 € ÷ 50 € = 500 unidades'],
      results: { 'Unidades Necesarias': '500 unidades' },
      takeaway: 'Se requiere vender 500 unidades para cubrir la estructura fija y embolsar 15.000 € de beneficio neto.',
    },
    assumptions: [{ term: 'Beneficio Objetivo', definition: 'Monto de beneficio operativo que se desea generar en el período.' }],
    faqs: [
      {
        question: '¿En qué se diferencia del punto de equilibrio?',
        answer: 'El punto de equilibrio busca beneficio cero. El cálculo de beneficio objetivo añade la ganancia deseada a los costes a cubrir.',
      },
    ],
  },
  'revenue-calculator': {
    name: 'Calculadora de Ingresos',
    shortName: 'Ingresos Totales',
    tagline: 'Calcule la facturación total a partir del precio y volumen de ventas.',
    description: 'Proyecte los ingresos brutos totales y el valor medio por transacción en función del precio y el volumen comercializado.',
    seoTitle: 'Calculadora de Ingresos — Proyecte su Facturación Total',
    seoDescription: 'Calcule los ingresos brutos previstos a partir de precios unitarios y volumen de ventas.',
    formulas: [
      {
        title: 'Ingresos Totales',
        formula: 'Ingresos = Precio Unitario × Unidades Vendidas',
        plainText: 'Multiplique el precio de venta por la cantidad total de unidades vendidas.',
        explanation: 'Fórmula fundamental de facturación en ventas comerciales.',
      },
    ],
    workedExample: {
      title: 'Proyección de Ventas Trimestrales',
      scenario: 'Una empresa vende 1.200 unidades de un software a 49 € por licencia.',
      inputs: { 'Precio': '49 €', 'Unidades': '1.200' },
      steps: ['Ingresos = 49 € × 1.200 = 58.800 €'],
      results: { 'Ingresos Totales': '58.800 €' },
      takeaway: 'La facturación bruta prevista asciende a 58.800 €.',
    },
    assumptions: [{ term: 'Precio Unitario', definition: 'Importe cobrado por cada unidad transaccionada.' }],
    faqs: [
      {
        question: '¿Qué es el ingreso medio por usuario (ARPU)?',
        answer: 'Es el promedio de ingresos generados por cada cliente activo en un período determinado.',
      },
    ],
  },
  'commission-calculator': {
    name: 'Calculadora de Comisiones',
    shortName: 'Comisiones',
    tagline: 'Calcule la retribución por comisiones y la remuneración variable de ventas.',
    description: 'Calcule las ganancias por comisión, importes de bonificación y porcentajes de liquidación comercial sobre ventas.',
    seoTitle: 'Calculadora de Comisiones de Venta — Calcule Liquidaciones',
    seoDescription: 'Calcule comisiones de venta, remuneración variable y porcentajes sobre facturación.',
    formulas: [
      {
        title: 'Comisión de Venta',
        formula: 'Comisión = Volumen de Venta × (Porcentaje ÷ 100)',
        plainText: 'Multiplique el importe facturado por la tasa porcentual de comisión.',
        explanation: 'Determina el incentivo variable devengado por la gestión comercial.',
      },
    ],
    workedExample: {
      title: 'Liquidación con Comisión del 8%',
      scenario: 'Un agente comercial cierra operaciones por valor de 45.000 € con una comisión pactada del 8%.',
      inputs: { 'Ventas': '45.000 €', 'Tasa': '8%' },
      steps: ['Comisión = 45.000 € × 0,08 = 3.600 €'],
      results: { 'Comisión a Percibir': '3.600 €' },
      takeaway: 'El agente percibe 3.600 € de retribución variable por su volumen comercial.',
    },
    assumptions: [{ term: 'Tasa de Comisión', definition: 'Porcentaje acordado sobre el valor de las ventas cerradas.' }],
    faqs: [
      {
        question: '¿Cómo funcionan las comisiones escalonadas?',
        answer: 'Aplican porcentajes crecientes según se superan determinados tramos de facturación (aceleradores).',
      },
    ],
  },
  'roi-calculator': {
    name: 'Calculadora de ROI (Retorno de la Inversión)',
    shortName: 'ROI',
    tagline: 'Evalúe la rentabilidad porcentual y el rendimiento económico de sus inversiones.',
    description: 'Calcule el retorno de la inversión (ROI) porcentual y la ganancia neta generada en proyectos de capital, campañas o activos.',
    seoTitle: 'Calculadora de ROI — Calcule el Retorno sobre la Inversión',
    seoDescription: 'Calcule el ROI porcentual y el beneficio neto generado a partir del coste y rendimiento de su inversión.',
    formulas: [
      {
        title: 'ROI (%)',
        formula: 'ROI (%) = ((Retorno Total - Inversión) ÷ Inversión) × 100',
        plainText: 'Reste la inversión inicial del retorno total, divida entre la inversión y multiplique por 100.',
        explanation: 'Mide la eficiencia económica y rendimiento porcentual de cualquier capital comprometido.',
      },
    ],
    workedExample: {
      title: 'Evaluación de Proyecto Comercial',
      scenario: 'Se invierten 10.000 € en modernizar maquinaria y se generan 16.000 € de ingresos adicionales.',
      inputs: { 'Inversión': '10.000 €', 'Retorno Total': '16.000 €' },
      steps: ['Ganancia Neta = 16.000 € - 10.000 € = 6.000 €', 'ROI = (6.000 € ÷ 10.000 €) × 100 = 60,00%'],
      results: { 'Ganancia Neta': '6.000 €', 'ROI': '60,00%' },
      takeaway: 'Por cada euro invertido, el proyecto recupera el euro y genera 0,60 € de ganancia neta.',
    },
    assumptions: [{ term: 'Capital Invertido', definition: 'Total de recursos económicos dedicados a la iniciativa.' }],
    faqs: [
      {
        question: '¿Qué se considera un buen ROI empresarial?',
        answer: 'Un buen ROI depende del sector y del coste de capital, pero generalmente un ROI superior al 15-20% anual se considera muy favorable.',
      },
    ],
  },
  'roas-calculator': {
    name: 'Calculadora de ROAS (Retorno del Gasto Publicitario)',
    shortName: 'ROAS',
    tagline: 'Determine los ingresos generados por cada euro invertido en publicidad.',
    description: 'Calcule el ROAS y la rentabilidad publicitaria de sus campañas de marketing de pago en Google, Meta o marketplaces.',
    seoTitle: 'Calculadora de ROAS — Retorno de la Inversión Publicitaria',
    seoDescription: 'Calcule el retorno del gasto publicitario (ROAS) y la efectividad de sus campañas de paid media.',
    formulas: [
      {
        title: 'ROAS (Multiplicador)',
        formula: 'ROAS = Ingresos Publicitarios ÷ Gasto Publicitario',
        plainText: 'Divida los ingresos generados por los anuncios entre la inversión publicitaria.',
        explanation: 'Indica cuántos euros de facturación genera cada euro invertido en medios.',
      },
    ],
    workedExample: {
      title: 'Campaña en Redes Sociales',
      scenario: 'Una marca invierte 3.000 € en publicidad y genera 15.000 € en ventas directas.',
      inputs: { 'Gasto Publicitario': '3.000 €', 'Ingresos': '15.000 €' },
      steps: ['ROAS = 15.000 € ÷ 3.000 € = 5,00x (o 500%)'],
      results: { 'ROAS': '5,00x' },
      takeaway: 'Por cada 1 € invertido en anuncios, la marca factura 5 € de ventas brutas.',
    },
    assumptions: [{ term: 'Gasto Publicitario', definition: 'Inversión neta pagada a la plataforma de medios (Google, Meta, etc.).' }],
    faqs: [
      {
        question: '¿En qué se diferencia el ROAS del ROI?',
        answer: 'El ROAS mide ingresos brutos frente al gasto publicitario directo. El ROI mide el beneficio neto considerando también los costes del producto y envíos.',
      },
    ],
  },
  'cac-calculator': {
    name: 'Calculadora de CAC (Coste de Adquisición de Clientes)',
    shortName: 'CAC',
    tagline: 'Mida el coste real para conseguir cada nuevo cliente de pago.',
    description: 'Calcule el CAC combinado y de canales específicos dividiendo el gasto comercial y publicitario entre los clientes captados.',
    seoTitle: 'Calculadora de CAC — Coste de Adquisición de Clientes',
    seoDescription: 'Calcule su Coste de Adquisición de Clientes (CAC) a partir del gasto en marketing y los nuevos clientes.',
    formulas: [
      {
        title: 'CAC',
        formula: 'CAC = Gasto Total en Ventas y Marketing ÷ Nuevos Clientes Captados',
        plainText: 'Divida el presupuesto total comercial entre el número de nuevos clientes.',
        explanation: 'Métrica crítica de sostenibilidad y escalabilidad para negocios modernos.',
      },
    ],
    workedExample: {
      title: 'Captación Mensual SaaS',
      scenario: 'Un equipo gasta 20.000 € en marketing y adquiere 100 clientes nuevos en el mes.',
      inputs: { 'Gasto Total': '20.000 €', 'Clientes': '100' },
      steps: ['CAC = 20.000 € ÷ 100 = 200,00 €'],
      results: { 'CAC': '200,00 €' },
      takeaway: 'Cuesta exactamente 200 € en esfuerzo comercial captar a cada nuevo suscriptor.',
    },
    assumptions: [{ term: 'Gasto Comercial', definition: 'Suma de presupuestos de medios, herramientas de marketing y salarios del área.' }],
    faqs: [
      {
        question: '¿Cómo saber si mi CAC es sostenible?',
        answer: 'Comparándolo con el valor de vida del cliente (LTV). La relación saludable estándar es LTV:CAC de al menos 3:1.',
      },
    ],
  },
  'ltv-calculator': {
    name: 'Calculadora de LTV (Valor de Vida del Cliente)',
    shortName: 'LTV',
    tagline: 'Estime los ingresos totales que un cliente genera a lo largo de su relación comercial.',
    description: 'Calcule el Customer Lifetime Value (LTV) según el ticket medio, la frecuencia de compra y la tasa de retención.',
    seoTitle: 'Calculadora de LTV — Valor del Ciclo de Vida del Cliente',
    seoDescription: 'Calcule el valor de vida del cliente (LTV / CLV) según el valor medio de compra y la permanencia.',
    formulas: [
      {
        title: 'LTV Básico',
        formula: 'LTV = Valor Medio de Compra × Frecuencia Anual × Vida Media (años)',
        plainText: 'Multiplique el ticket promedio por la frecuencia anual y los años de relación.',
        explanation: 'Estima la facturación total esperada que aportará un cliente fidelizado.',
      },
    ],
    workedExample: {
      title: 'Suscripción con Retención Media',
      scenario: 'Un cliente paga 50 € al mes y permanece un promedio de 12 meses.',
      inputs: { 'Ticket Mensual': '50 €', 'Meses de Vida': '12' },
      steps: ['LTV = 50 € × 12 = 600,00 €'],
      results: { 'LTV Estimado': '600,00 €' },
      takeaway: 'Cada cliente aporta de media 600 € de ingresos brutos a lo largo de su ciclo de vida.',
    },
    assumptions: [{ term: 'Vida Media', definition: 'Duración promedio de la relación comercial antes de darse de baja (churn).' }],
    faqs: [
      {
        question: '¿Por qué es fundamental conocer el LTV?',
        answer: 'Permite fijar el límite máximo razonable que la empresa puede invertir en adquirir a un cliente (CAC).',
      },
    ],
  },
  'ltv-cac-calculator': {
    name: 'Calculadora de Ratio LTV:CAC',
    shortName: 'Ratio LTV:CAC',
    tagline: 'Compare el valor de vida del cliente con su coste de adquisición para validar su modelo.',
    description: 'Evalúe la viabilidad de su economía unitaria analizando la relación entre el valor generado por cliente y el coste de captarlo.',
    seoTitle: 'Calculadora de Ratio LTV:CAC — Métrica de Economía Unitaria',
    seoDescription: 'Evalúe la sostenibilidad de su negocio comparando el Customer Lifetime Value con el coste de adquisición.',
    formulas: [
      {
        title: 'Ratio LTV:CAC',
        formula: 'Ratio = Valor de Vida (LTV) ÷ Coste de Adquisición (CAC)',
        plainText: 'Divida el LTV estimado entre el CAC unitario.',
        explanation: 'Punto de referencia clave para evaluar la eficiencia comercial y atractivo para inversores.',
      },
    ],
    workedExample: {
      title: 'Validación de Ratio de Adquisición',
      scenario: 'El LTV de un cliente es de 600 € y su CAC es de 200 €.',
      inputs: { 'LTV': '600 €', 'CAC': '200 €' },
      steps: ['Ratio LTV:CAC = 600 € ÷ 200 € = 3,00 : 1'],
      results: { 'Ratio LTV:CAC': '3,00 : 1' },
      takeaway: 'Una relación 3:1 se considera óptima: el cliente genera 3 veces lo que costó adquirirlo.',
    },
    assumptions: [{ term: 'Benchmark Óptimo', definition: '3:1 indica equilibrio saludable; 5:1 o superior sugiere margen para invertir más.' }],
    faqs: [
      {
        question: '¿Qué significa un ratio LTV:CAC inferior a 1:1?',
        answer: 'Significa que captar al cliente cuesta más de lo que aportará en toda su vida, generando pérdidas directas.',
      },
    ],
  },
  'conversion-rate-calculator': {
    name: 'Calculadora de Tasa de Conversión',
    shortName: 'Tasa de Conversión',
    tagline: 'Calcule el porcentaje de visitas o prospectos que completan su objetivo comercial.',
    description: 'Analice la eficacia de su embudo comercial o tienda online midiendo el porcentaje de conversiones sobre el tráfico total.',
    seoTitle: 'Calculadora de Tasa de Conversión — Analice su Embudo',
    seoDescription: 'Calcule el porcentaje de conversión de su web, embudo de ventas o campañas de marketing.',
    formulas: [
      {
        title: 'Tasa de Conversión (%)',
        formula: 'Conversión (%) = (Conversiones ÷ Total de Visitas) × 100',
        plainText: 'Divida las acciones deseadas entre el total de sesiones y multiplique por 100.',
        explanation: 'Indicador primario de eficacia en diseño de interfaces, ofertas y comercio digital.',
      },
    ],
    workedExample: {
      title: 'E-commerce Checkout',
      scenario: 'Una tienda recibe 20.000 visitas en el mes y registra 600 pedidos completados.',
      inputs: { 'Visitas': '20.000', 'Pedidos': '600' },
      steps: ['Tasa = (600 ÷ 20.000) × 100 = 3,00%'],
      results: { 'Tasa de Conversión': '3,00%' },
      takeaway: 'El 3,00% de los visitantes completa una compra en la plataforma.',
    },
    assumptions: [{ term: 'Conversión', definition: 'Acción objetivo concluida con éxito (venta, registro, lead cualificado).' }],
    faqs: [
      {
        question: '¿Cuál es una tasa de conversión promedio en comercio electrónico?',
        answer: 'Suele situarse entre el 1,5% y el 3,5% dependiendo del ticket de compra y la procedencia del tráfico.',
      },
    ],
  },
};
