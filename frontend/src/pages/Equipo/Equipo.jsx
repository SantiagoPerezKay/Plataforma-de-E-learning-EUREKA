function Equipo() {
  const equipo = [
    {
      'foto':'https://media.licdn.com/dms/image/D4E03AQEYzi3v-GGJww/profile-displayphoto-shrink_200_200/0/1707444809201?e=1718236800&v=beta&t=jh3wpYOikDlVxrzK1O2JEFDAa9iYOfyF41LQG4pSQHs',
      'nombre':'Sandra Rodriguez',
      'rol':'Project Manager',
      'linkedin':'https://www.linkedin.com/in/sandra-rodriguez-133687275/',
      'pais':'colombia'
    },
    {
      'foto':'https://media.licdn.com/dms/image/D4E03AQF_nQGK-3JrLg/profile-displayphoto-shrink_200_200/0/1679680773846?e=1718236800&v=beta&t=bdG_fETzkDUIrIkrL3uVxoJLvhhShdw2bY21I1QpK68',
      'nombre':'Fernando Vergel',
      'rol':'UX/UI Designer',
      'linkedin':'https://www.linkedin.com/in/fernandovergel/',
      'pais':'peru'
    },
    {
      'foto':'https://media.licdn.com/dms/image/C4E03AQGAj0ChSEwqqg/profile-displayphoto-shrink_200_200/0/1559505443684?e=1718236800&v=beta&t=8HItf-6N7OBpQTRWH6C-vDB9PSRKxDkjkgRrauBeVZ4',
      'nombre':'Emiliano Joaquín Longo',
      'rol':'Frontend Developer',
      'linkedin':'https://www.linkedin.com/in/emilianojlongo/',
      'pais':'argentina'
    },
    {
      'foto':'https://media.licdn.com/dms/image/C4E03AQH8gckaub6L5w/profile-displayphoto-shrink_200_200/0/1528822792269?e=1718236800&v=beta&t=o1YrNoGAX-qcaQVmafPWhjlR1V-fhNU9JsdXo9rS4hQ',
      'nombre':'Jaime Orlando Angel Barreto',
      'rol':'Frontend Developer',
      'linkedin':'https://www.linkedin.com/in/jaimeangeldev/',
      'pais':'colombia'
    },
    {
      'foto':'https://v1.padlet.pics/3/image.webp?t=c_limit%2Cdpr_1%2Ch_521%2Cw_390&url=https%3A%2F%2Fugc.padletcdn.com%2Fuploads%2Fpadlet-uploads%2F2393757695%2Fab818374723a958ae5b4342c44f1b533%2FimgPerfilGaston.jpeg%3Fexpiry_token%3D5WaHZRdGG3LkUVQGy3SZ-zdRtq89aJeottSBaF_Hii8EGDVBG-vnLc5ZfL_2GiKosWMOCkHArMcc8LorETHcZ-tYwPe50fr2qaRAe9ur8hbTXZBY8QG6P55nDOZ46PidTPOcZkaeBqCNgR8XadkwFfUgLS2xzSLq5W-K4wv3TX-0V4sggzMd0f-netAb32YZKpgsxrVHZKmp2P8oMWaITjWQ8FpNa22VC56t9iZ2fU4%3D',
      'nombre':'Gaston Salas',
      'rol':'Frontend Developer',
      'linkedin':'https://www.linkedin.com/in/gastonsalas095/',
      'pais':'argentina'
    },
    {
      'foto':'https://v1.padlet.pics/3/image.webp?t=c_limit%2Cdpr_1%2Ch_536%2Cw_559&url=https%3A%2F%2Fugc.padletcdn.com%2Fuploads%2Fpadlet-uploads%2F2397832160%2F7af9e41784c9fb9e46402a7810acdd84%2FScreenshot_20240326_183123_2.png%3Fexpiry_token%3D5WaHZRdGG3LkUVQGy3SZ-zdRtq89aJeottSBaF_Hii8EGDVBG-vnLc5ZfL_2GiKosWMOCkHArMcc8LorETHcZ2ukeC7N_ni2lCC5rYOIPfP-h1Y5T-sNgHQJ9yxxGZgU-UOnkla_5QMO6gISuLqzBJ5JvE-XEjuN8sHLko8UQ6GtxjBhEctZ_dB4Bbl5uNkfQGaLxZLGR2f3qakgn8ZKBBqRHlHMd7_Ub04nv0CdnSs%3D',
      'nombre':'Tobias Olveira',
      'rol':'Frontend Developer',
      'linkedin':'https://www.linkedin.com/in/tobias-olveira-52a0311b7/',
      'pais':'argentina'
    },
    {
      'foto':'https://padlet.com/fernandovergel/conozc-monos-m-s-5xdzflr8zy2n1ab6/wish/2932851176',
      'nombre':'Luz Tabraj Briceño',
      'rol':'QA Tester',
      'linkedin':'https://www.linkedin.com/in/luz-tabraj/',
      'pais':'argentina'
    },
    {
      'foto':'https://media.licdn.com/dms/image/D4D35AQHqKKZ2RpsIHQ/profile-framedphoto-shrink_200_200/0/1712102066994?e=1713387600&v=beta&t=1vnAenIyfy1Ji4lKfQOXiQudyo1Ev-zvcdc1mkoxoAE',
      'nombre':'Tomás Soto',
      'rol':'QA Tester',
      'linkedin':'https://www.linkedin.com/in/tom%C3%A1s-soto-038709267/',
      'pais':'argentina'
    },
    {
      'foto':'https://v1.padlet.pics/3/image.webp?t=c_limit%2Cdpr_1%2Ch_536%2Cw_536&url=https%3A%2F%2Fugc.padletcdn.com%2Fuploads%2Fpadlet-uploads%2F2395266938%2F854ccd9f316b40fc6e86dd7d5153faa4%2Feliseo.png%3Fexpiry_token%3D5WaHZRdGG3LkUVQGy3SZ-zdRtq89aJeottSBaF_Hii8EGDVBG-vnLc5ZfL_2GiKosWMOCkHArMcc8LorETHcZyFZ4rVadHPOchGEPJrp9SreXIqgfBdjq_6Gp_TXupgXbVJY0VYJTfIGkmS4jHahvv_FQCOyV2k9T2j5mSThVKYZGJ8qGZkK48NNvI5YBfkFsmvFF6OI-0I_tAbCNZ8ApQ%3D%3D',
      'nombre':'Eliseo Montenegro',
      'rol':'Backend Developer',
      'linkedin':'https://www.linkedin.com/in/eliseo-montenegro/',
      'pais':'argentina'
    },
    {
      'foto':'https://media.licdn.com/dms/image/D4D35AQHo9wz6-ACLgA/profile-framedphoto-shrink_200_200/0/1686760359345?e=1713387600&v=beta&t=pGY_PJPSvMjPAAk9ECKpME_nddig3pdVcrcyvtZBYDo',
      'nombre':'Mariana Cuba',
      'rol':'Backend Developer',
      'linkedin':'https://www.linkedin.com/in/mariana-cuba-72a901258/',
      'pais':'argentina'
    },
    {
      'foto':'https://v1.padlet.pics/3/image.webp?t=c_limit%2Cdpr_1%2Ch_536%2Cw_668&url=https%3A%2F%2Fugc.padletcdn.com%2Fuploads%2Fpadlet-uploads%2F2421338242%2Fd63685f1173542af44cef102bf4e453d%2Ffot.jpg%3Fexpiry_token%3D5WaHZRdGG3LkUVQGy3SZ-zdRtq89aJeottSBaF_Hii8EGDVBG-vnLc5ZfL_2GiKosWMOCkHArMcc8LorETHcZ8LqAz1XLrBd2C7aAdtK3pQajjXE0p6JHJE6Nm4bvjbGvO_eOjL_GdiVSn9ziI_MmChI0uIWFVqBm-n05qHa48PBoRkcVj1lrz9aTevmzHw5ddISbRpQBHMh3eW_rrgS1g%3D%3D',
      'nombre':'Santiago perez kay',
      'rol':'Backend Developer',
      'linkedin':'https://www.linkedin.com/in/santiagoperezkay/',
      'pais':'argentina'
    },
    {
      'foto':'https://media.licdn.com/dms/image/D4E35AQGLPH6vpfY-MQ/profile-framedphoto-shrink_200_200/0/1710545024482?e=1713387600&v=beta&t=t-c7-qnZo5VfqnsmuX_JJIbGML9vqpxFI6qAGNeBSpc',
      'nombre':'Claudia Ortiz',
      'rol':'Backend Developer',
      'linkedin':'https://www.linkedin.com/in/claudia-ortiz-backend/',
      'pais':'argentina'
    },
    {
      'foto':'https://media.licdn.com/dms/image/C4D03AQFSFDnDRAhGbg/profile-displayphoto-shrink_200_200/0/1657742596603?e=1718236800&v=beta&t=NmImxlEqk9otwD_OEzSS7B0SH1alxKru9Mb5g0JzKvM',
      'nombre':'Luciana Mazur',
      'rol':'Backend Developer',
      'linkedin':'https://www.linkedin.com/in/lucianamazur/',
      'pais':'argentina'
    },
    {
      'foto':'https://v1.padlet.pics/3/image.webp?t=c_limit%2Cdpr_1%2Ch_536%2Cw_517&url=https%3A%2F%2Fugc.padletcdn.com%2Fuploads%2Fpadlet-uploads%2F2393289422%2Fe16a1d59691497b9f6e5151e839be376%2FLeandroDeferrari_JavaDeveloper.jpg%3Fexpiry_token%3D5WaHZRdGG3LkUVQGy3SZ-zdRtq89aJeottSBaF_Hii8EGDVBG-vnLc5ZfL_2GiKosWMOCkHArMcc8LorETHcZxKsyDdpL7WmvI0YQgkJK0K_G14lpNZdgTKc3gwq2_EkIzeP_vmXsdlaL3zrruckDpXv34obHCfUtEh9MTq26_W6sQVICNoMLSjJNb78-4JmB4eKuz9TKrav6dfTLgRKvpWb-n1B-tvvhBPeEXwP2HL5qMBZaJe8B9QgAu28k3tC',
      'nombre':'Leandro Deferrari Arevalo',
      'rol':'Backend Developer',
      'linkedin':'https://www.linkedin.com/in/leandrodeferrari/',
      'pais':'argentina'
    },
    {
      'foto':'https://media.licdn.com/dms/image/D4D35AQGtJ4nKhMDwzw/profile-framedphoto-shrink_200_200/0/1693237604423?e=1713387600&v=beta&t=ClrPMQ0UsTB2EZ10rMawLkJEazlFm9nt67rBqae0WMI',
      'nombre':'Alejandra Carla Panizza',
      'rol':'Team Leader',
      'linkedin':'https://www.linkedin.com/in/alejandra-carla-panizza/',
      'pais':'argentina'
    }
  ]
  return (
    <div className="w-full">
    </div>
  )
}

export default Equipo;
