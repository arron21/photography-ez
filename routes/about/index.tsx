import { RouteContext } from "$fresh/server.ts";

export default function MyPage(req: Request, ctx: RouteContext) {
  return (
    <>
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <h1 class="text-4xl py-4">
            About
        </h1>
        <p>My photography is often what catches my eye. The juxtaposition of nature and human made objects is what I find interesting. We build tall sky scrapers so we can see beyond the trees. We build televisions so we can watch birds inside of a box.</p>
<p>I try to capture the balance between our human existence and the existence of Earth itself.</p>
      </div>
    </>
  );
}
