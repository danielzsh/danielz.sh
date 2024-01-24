export const csr = false
export async function load({ params }) {
	return {
		page: await import(`../../../../blog/${params.slug}/page.md`).then((module) => module.default)
	}
}
