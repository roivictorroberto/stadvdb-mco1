import Link from 'next/link';

export default function OlapReports() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <Link href="/report-1" className="flex items-center gap-4 p-4 text-primary rounded-lg border-2 border-primary hover:border-background
                    hover:bg-primary hover:text-background transition-all ease-linear duration-100">
          <span className="text-xl font-medium">Report 1</span>
      </Link>
      <Link href="/report-2" className="flex items-center gap-4 p-4 text-primary rounded-lg border-2 border-primary hover:border-background
                    hover:bg-primary hover:text-background transition-all ease-linear duration-100">
          <span className="text-xl font-medium">Report 2</span>
      </Link>
      <Link href="/report-3" className="flex items-center gap-4 p-4 text-primary rounded-lg border-2 border-primary hover:border-background
                    hover:bg-primary hover:text-background transition-all ease-linear duration-100">
          <span className="text-xl font-medium">Report 3</span>
      </Link>
      <Link href="/report-4" className="flex items-center gap-4 p-4 text-primary rounded-lg border-2 border-primary hover:border-background
                    hover:bg-primary hover:text-background transition-all ease-linear duration-100">
          <span className="text-xl font-medium">Report 4</span>
      </Link>
    </div>
  );
}