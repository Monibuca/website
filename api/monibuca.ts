import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function (req: VercelRequest, res: VercelResponse) {
  const url = new URL(req.url!, `http://${req.headers.host}`);
  const [, monibuca, version] = url.pathname.split('/');
  res.end(`<!DOCTYPE html>
<html>

<head>
  <meta name="go-import" content="m7s.live/${monibuca}/${version} git ssh://git@github.com/langhuihui/monibuca">
  <meta name="go-source"
    content="m7s.live/${monibuca}/${version} _ https://github.com/langhuihui/monibuca/tree/${version}{/dir} https://github.com/langhuihui/monibuca/tree/${version}{/dir}/{file}#L{line}">
  <meta http-equiv="refresh" content="0; url=https://pkg.go.dev/m7s.live/${monibuca}/${version}">
</head>

<body>
  Nothing to see here. Please <a href="https://pkg.go.dev/m7s.live/${monibuca}/${version}">move along</a>.
</body>

</html>
  `);
}
