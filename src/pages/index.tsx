import Button from "@components/shared/Button";
import Frame from "@components/shared/Frame";
import { useRouter } from "next/router";
import { useAuthContext } from "src/context/AuthContext";
import { useLoaderContext } from "src/context/LoaderContext";
import apiClient from "src/remote/axios";

// interface HomePageProps {
// initialData: {
//   emp: Employee | null;
// };
// }

function Page() {
  const router = useRouter();
  const { emp, setEmp } = useAuthContext();
  const { open, loader } = useLoaderContext();

  return (
    <Frame title="메인">
      <Button
        onClick={async () => {
          try {
            const res = await apiClient.get("/api/empList");
            // console.log(res.data);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        부서 목록
      </Button>
    </Frame>
  );
}

export default Page;

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   try {
//     const cookies = context.req.headers.cookie;

//     const res = await apiClient.post(
//       "/api/token/invalid",
//       {},
//       {
//         headers: {
//           Cookie: cookies || "",
//         },
//       },
//     );

//     // If authentication successful, pass the user data
//     return {
//       props: {
//         initialData: {
//           emp: res.data.user || null,
//         },
//       },
//     };
//   } catch (error) {
//     console.log(error);
//     return {
//       props: {
//         initialData: {
//           emp: null,
//         },
//       },
//     };
//   }
// }
