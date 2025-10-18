export const dynamic = 'force-dynamic' // 캐시 방지

async function proxy(req: Request, { params }: { params: { path?: string[] } }) {
  const BACKEND = 'http://toysmyth-api.toysmythiot.com:8085/' // ← 여기에 네 API 서버 주소
  const tail = params.path?.join('/') ?? ''
  const url = new URL(req.url)
  const target = `${BACKEND}/${tail}${url.search}`

  const resp = await fetch(target, {
    method: req.method,
    body: req.method === 'GET' || req.method === 'HEAD' ? undefined : await req.arrayBuffer(), // POST/PUT만 body 전달
  })

  // 원본 응답 그대로 전달
  return new Response(resp.body, {
    status: resp.status,
    headers: resp.headers, // Content-Type 등 유지
  })
}

export { proxy as GET, proxy as POST, proxy as PUT, proxy as PATCH, proxy as DELETE }
