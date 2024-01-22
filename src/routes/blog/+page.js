export const csr = false
export async function load() {
	const posts = import.meta.glob('/blog/*.md')
	const postData = await Promise.all(
		Object.keys(posts).reduce((res, path) => {
			res.push(
				posts[path]().then((module) => ({
					url: path,
					metadata: module.metadata,
					content: module.default
				}))
			)
			return res
		}, [])
	)
	console.log(postData)
	return {
		posts: postData
	}
}
