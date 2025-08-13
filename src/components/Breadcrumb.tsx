import React from 'react';
interface BreadcrumbItem {
  label: string;
  href?: string;
  isActive?: boolean;
}
interface BreadcrumbProps {
  items: BreadcrumbItem[];
}
const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items
}) => {
  return <nav aria-label="Breadcrumb" className="mb-6 w-full overflow-x-auto pl-0 ml-0 mt-4">
  <ol className="flex items-center text-sm text-gray-600 py-2 whitespace-nowrap">
    {items.map((item, index) => (
      <li key={index} className="inline-flex items-center">
        {item.href && !item.isActive ? (
          <a href={item.href} className={`text-gray-600 hover:text-blue-600 transition-colors`}>
            {item.label}
          </a>
        ) : (
          <span
            className={item.isActive ? "font-medium" : "text-gray-600"}
            style={item.isActive ? { color: '#253edb' } : {}}
            aria-current={item.isActive ? "page" : undefined}
          >
            {item.label}
          </span>
        )}
        {index < items.length - 1 && (
          <span className="text-gray-600 mx-2">/</span>
        )}
      </li>
    ))}
  </ol>
</nav>
};
export default Breadcrumb;