import { createLazyFileRoute } from '@tanstack/react-router'
import { BarChart, Card, CategoryBar, Flex, Icon, List, ListItem, Metric, Tab, TabGroup, TabList, TabPanel, TabPanels, Text } from '@tremor/react';
import { Check, CloudDownload, Filter, Flash, Spark, Xmark } from 'iconoir-react';
import { empresaService, getDataEmpresa } from '../../services/EmpresaService';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export const Route = createLazyFileRoute('/score/$scoreId')({
  component: () => Dashboard(),
})


function Dashboard() {
  const { scoreId } = Route.useParams()
  const [dataEmpresa, setDataEmpresa] = useState<any[]>([])
  const [lastData, setLastData] = useState<any>({})

  const empresaQuery = useQuery({
    queryKey: ['empresas-dashboard'],
    queryFn: () => empresaService.getEmpresas(),
    refetchOnWindowFocus: true,
    refetchInterval: 1000,
  })

  useEffect(() => {
    if (empresaQuery.data) {
      console.log(empresaQuery.data)
      setDataEmpresa(getDataEmpresa(empresaQuery.data, scoreId))
    }
  }, [empresaQuery.data])
  useEffect(() => {
    setLastData(dataEmpresa[dataEmpresa.length - 1])
  }, [dataEmpresa])

  return (
    <div className='flex flex-col gap-4 p-4 items-center text-center w-[80%] mx-auto'>
      <h1 className='text-3xl font-bold'>Reporte ESG - {scoreId}</h1>
      <div className="w-full">

        <TabGroup>
          <TabList variant="solid">
            <Tab value="1">SCORE</Tab>
            <Tab value="2">MEJORAS</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              {lastData && <Score data={lastData} />}
            </TabPanel>
            <TabPanel>
              <p className="mt-4 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                Diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
              </p>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  )
}

type ScoreProps = {
  data: any;
}

function Score({ data }: ScoreProps) {
  const [policies, _] = useState<any[]>(Object.entries(data).filter(([key, _]) => key.includes('policy')).map(([key, value]) => ({ policy: key, check: value })))

  const chartdata = [
    {
      name: 'Uso de Energia',
      'relevancia': 2488,
    },
    {
      name: 'Uso de Agua',
      'relevancia': 1445,
    },
    {
      name: 'Politicas de Diversidad',
      'relevancia': 743,
    },
    {
      name: 'Emicion de CO2',
      'relevancia': 281,
    },
    {
      name: 'Brecha salarial',
      'relevancia': 251,
    },
  ];

  const dataFormatter = (number: number) =>
    Intl.NumberFormat('us').format(number).toString();


  return (
    <>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-4 w-full mb-4">
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
              {data?.co2_revenues?.toFixed(2)}
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
              {data?.water_revenues?.toFixed(2)}
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
              {data?.energy_revenues?.toFixed(2)}
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
              {data?.renewable_energy?.toFixed(2)}
            </Metric>
            <Icon
              icon={Spark}
              variant="light"
              tooltip="Tooltip to place context information"
            />
          </Flex>


        </Card>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 w-full">
        <Card

          className="w-full col-span-2 sm:col-span-1 shadow-none sm:my-auto sm:h-full sm:flex sm:flex-col sm:justify-center"

        >
          <Text>
            Score - ESG
          </Text>
          <Metric>
            {data?.esg_score?.toFixed(2)} / 100
          </Metric>
          <CategoryBar
            values={[40, 30, 10]}
            colors={['emerald', 'yellow', 'rose']}
            markerValue={data?.esg_score}
          />
        </Card>
        <Card
          className="mx-auto w-full shadow-none"
        >
          <Metric>
            Politicas
          </Metric>
          <List className="mt-2">
            {policies.map((item) => (
              <ListItem key={item.policy}>
                <span>{item.policy}</span>
                <span>
                  <Icon
                    icon={item.check ? Check : Xmark}
                    variant={item.check ? 'light' : 'shadow'}
                    color={item.check ? 'emerald' : 'rose'}
                  />
                </span>
              </ListItem>
            ))}
          </List>
        </Card>
        <Card
          className="mx-auto w-full shadow-none col-span-2"
        >
          <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
            KPI relevancia
          </h3>
          <BarChart
            data={chartdata}
            index="name"
            categories={['relevancia']}
            colors={['blue']}
            valueFormatter={dataFormatter}
            yAxisWidth={48}
          />
        </Card>
      </div>
    </>
  )
}