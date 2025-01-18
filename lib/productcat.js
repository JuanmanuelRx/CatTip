import z from 'zod'
const incatSchema = z.object({
    nombre: z.string({
      invalid_type_error: 'nombre es tipo caracteres',
      required_error: 'nombre es requerido.'
    }),
    cantidad: z.number().int().min(1).max(1000),
    medidad: z.string().optional(),
    precio: z.number().int().positive(),
    calidad: z.number().min(0).max(5).default(1),
  })
  export function validateMovie (input) {
    return incatSchema.safeParse(input)
  }
  
  export function validatePartialMovie (input) {
    return incatSchema.partial().safeParse(input)
  }