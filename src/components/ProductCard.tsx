import React from 'react'

type ProductCardProps = {
  name: string
  price: number
  description?: string
}

export function ProductCard({ name, price, description }: ProductCardProps) {
  return (
    <article style={{ border: '1px solid #444', padding: 12, borderRadius: 8 }}>
      <h3 style={{ marginTop: 0 }}>{name}</h3>
      <p>
        <strong>Price:</strong> ${price.toFixed(2)}
      </p>
      {description && <p>{description}</p>}
    </article>
  )
}


