import { RiToolsFill } from '@remixicon/react';
import { createLazyFileRoute } from '@tanstack/react-router'
import { Card, CategoryBar, Flex, Icon, ListItem, Metric, Text } from '@tremor/react';
import { CloudDownload, Filter, Flash, LightBulb, List, Spark } from 'iconoir-react';

export const Route = createLazyFileRoute('/dashboard/')({
  component: () => Dashboard(),
})


function Dashboard() {
  const cities = [
    {
      policy: 'POLITICA DE SEGURIDAD Y SALUD EN CADENA DE SUMINISTRO',
      check: true,
    },
    {
      policy: 'POLITICA DE SEGURIDAD Y SALUD',
      check: true,
    },
    {
      policy: 'POLITICA DE INDEPENDENCIA DE DIRECTORIO',
      check: false,
    },
    {
      policy: 'POLITICA DE EXPERIENCIA DE DIRECTORIO',
      check: true,
    },
    {
      policy: 'POLITICA DE DIVERSIDAD Y OPORTUNIDAD',
      check: true,
    },
    {
      policy: 'POLITICA DE DIVERSIDAD DE DIRECTORIO',
      check: true,
    },
  ];


  return (
    <div className='flex flex-col gap-4 p-4 items-center text-center w-full'>
      <h1 className='text-3xl font-bold'>Reporte ESG - NOMBRE_EMPRESA</h1>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-4 w-[80%]">
        <Card

          className="mx-auto w-full shadow-none"
          decoration="top"
          decorationColor="indigo"

        >
          <Text>
            Emisiones CO2
          </Text>
          <Flex>
            <Metric>
              138 MM
            </Metric>
            <Icon
              icon={CloudDownload}
              variant="light"
              tooltip="Tooltip to place context information"
            />
          </Flex>


        </Card>
        <Card

          className="mx-auto w-full shadow-none"
          decoration="top"
          decorationColor="indigo"

        >
          <Text>
            Uso de agua
          </Text>
          <Flex>
            <Metric>
              138 MM
            </Metric>
            <Icon
              icon={Filter}
              variant="light"
              tooltip="Tooltip to place context information"
            />
          </Flex>


        </Card>
        <Card

          className="mx-auto w-full shadow-none"
          decoration="top"
          decorationColor="indigo"

        >
          <Text>
            Uso de energia
          </Text>
          <Flex>
            <Metric>
              138 MM
            </Metric>
            <Icon
              icon={Flash}
              variant="light"
              tooltip="Tooltip to place context information"
            />
          </Flex>


        </Card>
        <Card

          className="mx-auto w-full shadow-none"
          decoration="top"
          decorationColor="indigo"

        >
          <Text>
            Uso de energia RVB
          </Text>
          <Flex>
            <Metric>
              138 MM
            </Metric>
            <Icon
              icon={Spark}
              variant="light"
              tooltip="Tooltip to place context information"
            />
          </Flex>


        </Card>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 w-[80%]">
        <Card

          className="mx-auto w-full shadow-none"

        >
          <Text>
            Score - ESG
          </Text>
          <Metric>
            62 / 100
          </Metric>

          <CategoryBar
            values={[40, 30, 10]}
            colors={['emerald', 'yellow', 'rose']}
            markerValue={62}
          />


        </Card>
        <Card

          className="mx-auto w-full shadow-none"
          decoration="top"
          decorationColor="indigo"

        >
          <Text>
            Uso de agua
          </Text>
          <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">Tremor's Hometowns</h3>
          <List className="mt-2">
            {cities.map((item) => (
              <ListItem key={item.policy}>
                <span>{item.policy}</span>
                <span>{item.check}</span>
              </ListItem>
            ))}
          </List>



        </Card>
        <Card

          className="mx-auto w-full shadow-none"
          decoration="top"
          decorationColor="indigo"

        >
          <Text>
            Uso de energia
          </Text>
          <Flex>
            <Metric>
              138 MM
            </Metric>
            <Icon
              icon={Flash}
              variant="light"
              tooltip="Tooltip to place context information"
            />
          </Flex>


        </Card>
        <Card

          className="mx-auto w-full shadow-none"
          decoration="top"
          decorationColor="indigo"

        >
          <Text>
            Uso de energia RVB
          </Text>
          <Flex>
            <Metric>
              138 MM
            </Metric>
            <Icon
              icon={Spark}
              variant="light"
              tooltip="Tooltip to place context information"
            />
          </Flex>


        </Card>
      </div>
    </div>
  )
}