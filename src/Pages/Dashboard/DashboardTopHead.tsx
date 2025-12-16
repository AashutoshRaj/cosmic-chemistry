import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom';
// import messages from '@/utils/message'


type DashboardTopHeadProps = {
  onClick?: () => void;
  buttonName?: string;
  tabName?: string;
  isButton?:true;
  isLink?:true;
  path?:string;
}

const DashboardTopHead = ({onClick, buttonName, tabName, isButton, isLink}: DashboardTopHeadProps) => {
  return (
    <div>
          <header className="flex-1 h-16 shrink-0 items-center gap-2 border-b p-4">
                {/* <SidebarTrigger className="-ml-1" /> */}
                <Breadcrumb className="w-full">
                  <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block"></BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem className="flex items-center justify-between w-full">
                      <BreadcrumbPage className="text-4xl font-bold">                        
                        {tabName}
                      </BreadcrumbPage>
                      {isButton ? (
                        <div className="flex gap-2">
                          <Button onClick={onClick}>{buttonName}</Button>
                        </div>
                      ) : isLink ? (
                        <div className="flex gap-2">
                          <Link to="/dashboard/create_task">
                            <Button>{buttonName}</Button>
                          </Link>
                        </div>
                      ) : null}
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </header>
    </div>
  )
}

export default DashboardTopHead
