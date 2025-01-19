import z from 'zod'
const incatSchema = z.object({
    nombre: z.string({
      invalid_type_error: 'nombre tipo cadena',
      required_error: 'nombre requerido.'
    }),
    imagen: z.string().url(),
    medida: z.string().optional(),
    cantidad: z.number().int().min(1).max(1000),
    precio: z.number().positive(),
    calidad: z.number().min(0).max(5).default(1),
    descripcion: z.string().optional(),
  })
  export function validateMovie (input) {
    return incatSchema.safeParse(input)
  }
  
  export function validatePartialMovie (input) {
    return incatSchema.partial().safeParse(input)
  }