export const csr = false
export async function load() {
	const posts = import.meta.glob('/blog/**/page.md')
	/** @type {{url: string, metadata: object, content: any, thumbnail: string}[]} */
	const postData = await Promise.all(
		Object.keys(posts).reduce((res, path) => {
			console.log(path)
			res.push(
				import(`../../../blog/${path.split('/')[2]}/thumbnail.svg`).then((thumbnail) =>
					posts[path]().then((module) => ({
						url: path,
						content: module.default,
						thumbnail: thumbnail.default,
						...module.metadata
					}))
				)
			)
			return res
		}, [])
	)
	console.log(postData)
	return {
		posts: postData
	}
}
