
interface INode {
  value: number
  next?: INode
}

const d: INode = {
  value: 4,
}

const c: INode = {
  value: 3,
  next: d
}

const b: INode = {
  value: 2,
  next: c
}

const a: INode = {
  value: 1,
  next: b
}


const reverse = (node: INode) => {

  if (node.next.next) {
    reverse(node.next)
  }

  if (!node.next.next) {
    node.next.next = node //3.4.next
    node.next = null // 3.next
  }

}
console.log(`
  Before reverse:
  ${JSON.stringify(a)}
`)

reverse(a)

console.log(`
  After reverse:
  ${JSON.stringify(d)}
`)