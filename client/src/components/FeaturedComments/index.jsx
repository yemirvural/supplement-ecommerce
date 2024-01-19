import styles from './styles.module.css'
import Comment from '../Comment'

let comments = [
  {
    id: "12431",
    product_id: 1,
    product_name: "Shaker1",
    product_image: "https://cdn-yotpo-images-production.yotpo.com/Product/343983884/289204740/square.png?1704104367",
    title: "F/P",
    desc: "şöyle böyle bi ürün",
    commentator: "Mehmet H.",
    star: 3.50,
    date: "12/10/23",
  },
  {
    id: "8198",
    product_id: 2,
    product_name: "Shaker2",
    product_image: "https://cdn-yotpo-images-production.yotpo.com/Product/343989074/289208981/square.png?1690984879",
    title: "Shaker",
    desc: "şöyle böyle bi ürün",
    commentator: "Ahmet B.",
    star: 4,
    date: "02/01/24",
  },
  {
    id: "87876",
    product_id: 3,
    product_name: "Shaker3",
    product_image: "https://cdn-yotpo-images-production.yotpo.com/Product/343854467/289099160/square.png?1653692241",
    title: "ProteinBurada. farki",
    desc: "şöyle böyle bi ürün",
    commentator: "İbrahim S.",
    star: 2.50,
    date: "23/11/23",
  },
  {
    id: "87876",
    product_id: 3,
    product_name: "Shaker3",
    product_image: "https://cdn-yotpo-images-production.yotpo.com/Product/343854467/289099160/square.png?1653692241",
    title: "ProteinBurada. farki",
    desc: "şöyle böyle bi ürün",
    commentator: "İbrahim S.",
    star: 5,
    date: "02/01/24",
  },
  {
    id: "87876",
    product_id: 3,
    product_name: "Shaker3",
    product_image: "https://cdn-yotpo-images-production.yotpo.com/Product/343854467/289099160/square.png?1653692241",
    title: "ProteinBurada. farki",
    desc: "şöyle böyle bi ürün",
    commentator: "İbrahim S.",
    star: 3.50,
    date: "02/01/24",

  },
  {
    id: "87876",
    product_id: 3,
    product_name: "Shaker3",
    product_image: "https://cdn-yotpo-images-production.yotpo.com/Product/343854467/289099160/square.png?1653692241",
    title: "ProteinBurada. farki",
    desc: "şöyle böyle bi ürün",
    commentator: "İbrahim S.",
    star: 3.50,
    date: "02/01/24",
  }
]

function FeaturedComments() {
  return (
    <div className={styles.products}>
      <h3>GERÇEK MÜŞTERİ YORUMLARI</h3>
      <div className={styles.wrapper}>
        {
          comments.map(comment =>
          (
            <Comment key={comment.id} comment={comment} />
          ))
        }
      </div>
    </div>
  )
}

export default FeaturedComments