import { handlers } from "@/auth";

// export function GET(req: NextRequest, {nextauth}: authType ) {
//   console.log("nextauth param: ",nextauth)
//   return {}
// }

export const {GET,POST} = handlers;
