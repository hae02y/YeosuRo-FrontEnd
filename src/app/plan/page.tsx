'use client';

import ListHeader from '@/features/plan/components/headers/ListHeader'
import MyPlanCard from '@/features/plan/components/card/MyPlanCard'
import AddPlanCard from '@/features/plan/components/card/AddPlanCard'
import { useGetPlanList } from '@/features/plan/hooks/useGetPlanList';

  
const MyPlan = () => {

    const { data, isLoading, error } = useGetPlanList();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div style={{ width: '360px', margin:'0 auto'}}>
            <ListHeader/>
            <div style={{display:'flex', flexDirection:'column', gap:'12px', alignItems:'center', marginTop:'24px'}}>
                {data.map((item:any) =>
                  <MyPlanCard title={item.title} startDate={item.startDate && item.startDate} finishDate={item.finishDate && item.finishDate} key={item.id && item.id}/>
                )}
                <AddPlanCard />
            </div>
        </div>
    )
};

export default MyPlan